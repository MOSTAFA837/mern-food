import { useSearchRestaurants } from "@/api/restaurantApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

export default function SearchPage() {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  if (isLoading) {
    <span>Loading ...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list"></div>

      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by Cuisine or Restaurant Name"
          onReset={resetSearch}
        />

        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultInfo total={results.pagination.total} city={city} />
        </div>

        {results.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
