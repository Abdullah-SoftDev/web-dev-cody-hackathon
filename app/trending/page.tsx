import Promptcard from "../components/Promptcard";

const Page = async () => {

    return (
        <>
            <h1 className="text-2xl py-4">Hottest Prompts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {fetchedPosts.map((post) => (
            <Promptcard key={post.postId} {...post} />
          ))} */}
                <Promptcard />
                <Promptcard />
                <Promptcard />
            </div>
        </>
    );
};

export default Page;