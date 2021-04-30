import React from 'react';
import PostCard from '../components/PostCard';

import {
  LayoutStyle,
} from './styles';

import { posts } from '../mock';

const Layout: React.FC = () => {
  return(
    <>
      <LayoutStyle>
        <div className="title-container">
          <h2>Blog</h2>
          <figure/>
          <h3>Mais recentes</h3>
        </div>

        <div className="posts-list">
          {
            posts.map( (post, index) => (
              index < 3 && (
                <PostCard 
                  key={index}
                  image={post.image} 
                  post_name={post.post_name} 
                  short_description={post.short_description} 
                  tag={post.tag}
                  created_at={post.created_at}
                />
              )
            ))
          }
        </div>
      </LayoutStyle>
    </>
  )
}
export default Layout;