import React, { ImgHTMLAttributes } from "react";
import { Container, Description } from "./styles";

type PostProps = {
  banner: string;
  title: string;
  day: string;
  description: string;
};

function PostSelected({ banner, day, title, description }: PostProps) {
  return (
    <>
      <Container>
        <img src={banner} alt="Banner do Blog" />
        <div className="content">
          <h1>{title}</h1>
          <h6>{day}</h6>
        </div>
      </Container>
      <Description>
        <p>{description}</p>
      </Description>
    </>
  );
}

export default PostSelected;
