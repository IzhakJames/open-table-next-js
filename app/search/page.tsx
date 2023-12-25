import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE } from "@prisma/client";
import prisma from "@/prisma/client";

export interface searchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantByLocation = (searchParams: searchParams) => {
  const where: any = {};
  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    slug: true,
    cuisine: true,
    location: true,
    price: true,
    reviews: true,
  };

  if (!searchParams) {
    return prisma.restaurant.findMany({ select });
  }

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocation = () => {
  return prisma.location.findMany();
};

const fetchCuisine = () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: searchParams }) => {
  const restaurants = await fetchRestaurantByLocation(searchParams);
  const locations = await fetchLocation();
  const cuisines = await fetchCuisine();

  return (
    <>
      <Header></Header>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          searchParams={searchParams}
          locations={locations}
          cuisines={cuisines}></SearchSideBar>
        <div className="ml-3 w-5/6">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                main_image={restaurant.main_image}
                price={restaurant.price}
                city={restaurant.location.name}
                cuisine={restaurant.cuisine.name}
                slug={restaurant.slug}
                reviews={restaurant.reviews}
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
