import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Content from "./Content";

const Container = styled.div`
  width: 1728px;
  height: -moz-fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
const HomeLayoutWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: row wrap;
`;
const HomeLayoutMainWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 16px;
`;

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
    <Container>
      <HomeLayoutWrapper>
        <Header />
        <HomeNav />
        <HomeLayoutMainWrapper>
          <GridContainer>
            <Content />
            {posts.map((post) => (
              <PostItem key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </PostItem>
            ))}
          </GridContainer>
        </HomeLayoutMainWrapper>
      </HomeLayoutWrapper>
    </Container>
  );
};

export default Contents;
