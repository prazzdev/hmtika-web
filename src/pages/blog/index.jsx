import { getPosts } from "@/services/posts";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getBlogPost = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getBlogPost();
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      {posts &&
        posts.map((post) => (
          <>
            <div key={post.id}>
              <h1>{post.title}</h1>
              <Image
                key={post.id}
                src={post?.featureImage?.replaceAll("//", "https://")}
                height={100}
                width={150}
                alt={post.title}
              />
              {/* <p>{post.description}</p> */}
            </div>
          </>
        ))}
    </>
  );
};

export default BlogPage;
