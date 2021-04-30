import React from 'react';

import {
  PostCardStyles
} from './styles';

interface I_PostCard {
  image: string;
  post_name: string;
  short_description: string;
  tag: string;
  created_at: string;
}

const PostCard: React.FC<I_PostCard> = ({ 
  image, 
  post_name, 
  short_description, 
  tag, 
  created_at 
}) => {
  return (
    <PostCardStyles>
      <img src={image} alt={post_name}/>
      
      <div className="middle">
        <span>{created_at}</span>
        <span className="tag" >{tag}</span>
      </div>

      <main>
        <p>{post_name}</p>
        <span>{short_description}</span>
      </main>
    </PostCardStyles>
  )
}

export default PostCard;