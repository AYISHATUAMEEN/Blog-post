import React from 'react'

const Posts = ({posts}) => {
  return (
    <div>
       
        <h1>List of Posts</h1>
        {
            posts.map((post) => (
                <div className='border border-grey-300 shadow-md p-5'>
                    <h1 className='text-2xl'>{post.title}</h1>
                    <h3>{post.author} - <small>{post.publishedDate}</small>{" "}
                    </h3>
                    <p>{post.content}</p>
                    <hr />
             </div>
            ))
        }
    </div>
  )
}

export default Posts;

export async function getServerSideProps() {
   const res = await fetch("http://localhost:4000/posts");
   const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
}