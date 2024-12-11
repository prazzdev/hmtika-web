import Card from "@/components/fragments/Card";
import MainLayout from "@/layouts/MainLayout";
import { retrievePosts } from "@/services/posts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogView = () => {
  let dir = "/src/image/event/documentation/";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getBlogPost = async () => {
      try {
        const data = await retrievePosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getBlogPost();
  }, []);

  return (
    <MainLayout pageTitle={"Blog"}>
      <section
        className="mx-auto mt-16 mb-16 lg:px-[10em] py-8 lg:py-[5em] pb-0 container"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        {/* <h1 className="mb-10 font-bold text-center text-pgray text-xl">
          Kegiatan Rutin
        </h1> */}
        <div className="flex flex-col lg:justify-center gap-1 lg:gap-10">
          {posts &&
            posts.map((post, i) => (
              <>
                <Link
                  href={"/blog/" + post.slug}
                  target="_blank"
                  className="mb-3"
                >
                  <div className="post-header">
                    <Image
                      src={post.featureImage}
                      height={300}
                      width={900}
                      alt={post.title}
                      className="min-w-[100%] shadow-md"
                    />
                  </div>
                  <div className="post-body py-4 flex flex-col gap-2">
                    <h1 className="text-sgray text-xl lg:text-2xl">
                      {post.title}
                    </h1>
                    <h3 className="text-sm lg:text-md">
                      {new Date(post?.date).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </h3>
                    <p className="max-h-[60px] truncate">{post.description}</p>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogView;
