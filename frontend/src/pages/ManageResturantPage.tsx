import { useCreateRestaurant } from "@/api/restaurantApi";
import ResturantForm from "@/components/forms/resturant/ResturantForm";

export default function ManageResturantPage() {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();

  return (
    <ResturantForm
      //   restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isCreateLoading}
    />
  );
}
