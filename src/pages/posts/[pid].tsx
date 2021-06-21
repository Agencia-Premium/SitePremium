import React from "react";
import { useRouter } from "next/router";
import api from "../../services/api";
import { formatISO, format } from "date-fns";
import { GetStaticPaths } from "next";
import axios from "axios";

import { Container } from "../../components/Container";
import Navbar from "../../components/NavBar";
import PostsTemplate from "../../Templates/PostSelected";
import { baseURL } from "../../../config.json";
import BlogHome from "../../components/BlogHome";
import Footer from "../../components/Footer/ContactUs";
import ReactMarkdown from "react-markdown";

type PublicationType = {
  publication: {
    id: number;
    post_name: string;
    short_description: string;
    long_description: string;
    tag: string;
    published_at: string;
    image: {
      name: string;
      url: string;
    };
    banner: {
      url: string;
    };
    description: string;
  };
  posts: PostType[];
};

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
  };
};

const PostSelected = ({ publication, posts }: PublicationType) => {
  const router = useRouter();

  const time = format(new Date(publication.published_at), "MM / dd / yyyy");

  return (
    <>
      <Navbar />
      <Container>
        <PostsTemplate
          // banner={`http://localhost:1337${publication.image.url}`}
          banner={`https://cms.agenciapremium.com.br${publication.image.url}`}
          day={time}
          title={publication.post_name}
        />

        <ReactMarkdown
          className="markdown"
          children={publication.long_description}
        />
        <section style={{ marginTop: "120px" }}>
          <BlogHome posts={posts} />
        </section>
      </Container>
      <Footer />
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

export async function getStaticProps(ctx) {
  const { pid } = ctx.params;
  const { data: publicationData } = await axios.get(
    // `http://localhost:1337/posts/${pid}`
    `https://cms.agenciapremium.com.br/posts/${pid}`
  );
  const { data: postsData } = await axios.get(
    "https://cms.agenciapremium.com.br/posts"
  );

  const publication = publicationData as PublicationType[];
  const posts = postsData as PostType[];

  const postsListFormatted = posts.map((post) => {
    const [year, month, day] = formatISO(new Date(post.published_at), {
      representation: "date",
    }).split("-");
    return {
      id: post.id,
      post_name: post.post_name,
      short_description: post.short_description,
      long_description: post.long_description,
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
      publication,
      posts: postsListFormatted,
    },
    revalidate: 3600,
  };
}
