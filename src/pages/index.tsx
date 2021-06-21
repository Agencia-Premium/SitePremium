import React from "react";
import HomeTemplate from "../Templates/Home";
import api from "../services/api";
import Head from "next/head";
import { formatISO, getDay, getMonth, getYear } from 'date-fns'
import axios from 'axios'

type PostType = {
  id: number;
  post_name: string;
  short_description: string;
  long_description: string;
  tag: string;
  published_at: string;
  image: {
    name: string;
    url: string;
  }
}

export type HomeProps = {
  data: {
    id: number;
    title: string;
    description: string;
    image: {
      url: string;
    };
  }[],
  posts: PostType[],
};

export default function Home({ data, posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Agência Premium</title>
      </Head>
      <HomeTemplate data={data} posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await api.get("/works");
  // const { data: postsData } = await api.get("/posts");
  const { data: postsData } = await axios.get("https://cms.agenciapremium.com.br/posts");

  const posts = postsData as PostType[];

  const postsListFormatted = posts.map( post => {
    const [year, month, day] = formatISO(new Date(post.published_at), { representation: 'date' }).split('-');
    return {
      id: post.id,
      post_name: post.post_name,
      short_description: post.short_description,
      long_description: post.long_description,
      tag: post.tag,
      published_at: `${day} / ${month} / ${year}`,
      image: {
        name: post.image.name,
        url: post.image.url
      }
    }
  } );

  return {
    props: {
      data,
      posts: postsListFormatted,
    },
    revalidate: 3600,
  };
}
