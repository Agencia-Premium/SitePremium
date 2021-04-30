import React from "react";
import HomeTemplate from "../Templates/Home";
import api from "../services/api";
import Head from "next/head";
export type HomeProps = {
  data: {
    id: number;
    title: string;
    description: string;
    image: {
      url: string;
    };
  }[];
};

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Agência Premium</title>
      </Head>
      <HomeTemplate data={data} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await api.get("/works");
  return {
    props: {
      data,
    },
  };
}
