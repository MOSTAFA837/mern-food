import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/api/restaurantApi";
import ResturantForm from "@/components/forms/resturant/ResturantForm";

export default function ManageResturantPage() {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();

  const { restaurant } = useGetRestaurant();

  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();

  const isEditing = !!restaurant;

  return (
    <ResturantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
}
