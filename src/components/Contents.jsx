import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  padding: 0;
  margin: 0;
  --card-count: 5;
  --spacer: calc(var(--card-count) - 1);
  --width: 20%;
  grid-template-columns: repeat(
    var(--card-count),
    calc(var(--width) - (32px * var(--spacer) / var(--card-count)))
  );
`;

const PostItem = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Contents = () => {
  const posts = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    title: `Post ${index + 1}`,
    content: `This is the content of post ${index + 1}.`,
  }));

  return (
    <GridContainer>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </PostItem>
      ))}
    </GridContainer>
  );
};

export default Contents;
