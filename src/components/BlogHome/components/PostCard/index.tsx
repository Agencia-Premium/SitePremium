import React from "react";
import Link from "next/link";

import { PostCardStyles } from "./styles";

interface I_PostCard {
  image: {
    name: string;
    url: string;
  };
  id: number;
  post_name: string;
  short_description: string;
  tag: string;
  created_at: string;
}

const PostCard: React.FC<I_PostCard> = ({
  image,
  id,
  post_name,
  short_description,
  tag,
  created_at,
}) => {
  return (
    <PostCardStyles className="post-card">
      <img
        // src={`https://cms.agenciapremium.com.br${image.url}`}
        src={`http://localhost:1337${image.url}`}
        alt={image.name}
      />
      <div className="container-overflow">
        <Link href={`/posts/${id}`}>
          <button className="button-overflow">Continue Lendo</button>
        </Link>
      </div>
      <div className="middle">
        <span>{created_at}</span>
        <span className="tag">{tag}</span>
      </div>

      <main>
        <p>{post_name}</p>
        <span>{short_description}</span>
      </main>
    </PostCardStyles>
  );
};

export default PostCard;
