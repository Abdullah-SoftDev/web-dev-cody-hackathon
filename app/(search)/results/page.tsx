import NotFound from "@/app/components/NotFound";
import Promptcard from "@/app/components/Promptcard";

interface Props {
  searchParams: { search_query: string };
}

const Page = async ({ searchParams }: Props) => {
  const searchQuery = searchParams?.search_query;
  //   const results = await handelSearch(searchQuery);
  const results = false;

  if (!searchQuery) {
    return <NotFound />;
  }

  return (
    <>
      <h1 className="text-2xl py-4">Search Results</h1>
      {results ? (
        <div className="h-96 flex">
          <h2 className="text-xl text-red-500 m-auto">
            No prompts available for this Query.
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {results?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))} */}
          <Promptcard />
          <Promptcard />
          <Promptcard />
        </div>
      )}
    </>
  );
};

export default Page;