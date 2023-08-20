import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantByLocation = async (city: string) => {
  const restaurant = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      cuisine: true,
      location: true,
      price: true,
    },
  });

  return restaurant;
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const city = searchParams.city.toLowerCase();
  const restaurants = await fetchRestaurantByLocation(city);
  return (
    <>
      <Header></Header>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar></SearchSideBar>
        <div className="w-5/6">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                main_image={restaurant.main_image}
                price={restaurant.price}
                city={city}
                cuisine={restaurant.cuisine.name}
                slug={restaurant.slug}
              />
            ))
          ) : (
            <div>There are no restaurants in the searched area.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
