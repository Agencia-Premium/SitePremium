import React from "react";
import { useRouter } from "next/router";
import api from "../../services/api";
import { formatISO } from "date-fns";
import { GetStaticPaths } from "next";

type PostType = {
  id: number;
  post_name: string;
  short_description: string;
  tag: string;
  published_at: string;
  image: {
    name: string;
    url: string;
  };
};

const PostSelected = ({
  id,
  post_name,
  short_description,
  tag,
  published_at,
  image,
}: PostType) => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <h1>{pid}</h1>
    </>
  );
};

export default PostSelected;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: "blocking",
    };
  };
  

export async function getStaticProps() {
  const { data: postsData } = await api.get("/posts");

  const posts = postsData as PostType[];

  const postsListFormatted = posts.map((post) => {
    const [year, month, day] = formatISO(new Date(post.published_at), {
      representation: "date",
    }).split("-");
    return {
      id: post.id,
      post_name: post.post_name,
      short_description: post.short_description,
      tag: post.tag,
      published_at: `${day} / ${month} / ${year}`,
      image: {
        name: post.image.name,
        url: post.image.url,
      },
    };
  });

  return {
    props: {
      posts: postsListFormatted,
    },
    revalidate: 3600,
  };
}
