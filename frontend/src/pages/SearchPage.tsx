import { useSearchRestaurants } from "@/api/restaurantApi";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      searched for {city}
    </div>
  );
}
