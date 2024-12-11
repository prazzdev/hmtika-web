import React from "react";
import { retrieveSinglePostBySlug } from "@/services/posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import MainLayout from "@/layouts/MainLayout";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogDetailPage = () => {
  const [postData, setPostData] = useState([]);

  const router = useRouter();
  const slug = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    const getPostData = async () => {
      try {
        const cacheKey = `post-${slug}`;
        const cachedData = localStorage.getItem(cacheKey);

        // if (cachedData) {
        //   setPostData(JSON.parse(cachedData));
        // } else {
        const data = await retrieveSinglePostBySlug(slug);
        // localStorage.setItem(cacheKey, JSON.stringify(data));
        setPostData(data);
        // }
      } catch (error) {
        console.error(error);
      }
    };

    getPostData();
  }, [slug]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{postData ? postData[0]?.title : "Loading..."}</title>
          <meta
            property="og:image"
            content={postData && postData[0]?.featureImage}
          />
          <meta
            property="og:image:alt"
            content={postData && postData[0]?.title}
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>
        <MainLayout pageTitle={postData ? postData[0]?.title : "Loading..."}>
          {postData && (
            <>
              <section className="mx-auto mt-16 mb-16 lg:px-[10em] py-8 lg:py-[5em] pb-0 container">
                <h1 className="text-gray-700 text-xl lg:text-3xl lg:text-bold mb-4">
                  {postData[0]?.title}
                </h1>
                <h3 className="mb-5">
                  {new Date(postData[0]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </h3>
                <Markdown
                  className="post-wrapper"
                  options={{
                    wrapper: "article",
                  }}
                >
                  {postData[0]?.description}
                </Markdown>
                {postData && (
                  <h3 className="text-gray-700 mt-6">
                    Tags:{" "}
                    {postData[0]?.tags &&
                      postData[0]?.tags?.map((tag, i) => (
                        <span className="text-sm bg-gray-300 rounded-full py-2 px-4 ml-2">
                          {tag}
                        </span>
                      ))}
                  </h3>
                )}
              </section>
            </>
          )}
        </MainLayout>
      </HelmetProvider>
    </>
  );
};

export default BlogDetailPage;
