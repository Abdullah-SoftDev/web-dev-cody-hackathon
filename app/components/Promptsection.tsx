import React from 'react'
import Promptcard from './Promptcard'

const Promptsection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* {posts.map((post) => (
                // Rendering Promptcard component for each fetched post
                <Promptcard key={post.postId} {...post} />
            ))} */}
            <Promptcard />
            <Promptcard />
            <Promptcard />
            <Promptcard />
        </div>
    )
}

export default Promptsection