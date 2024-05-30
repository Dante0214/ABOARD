import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import HomeNav from "./HomeBar";
import Content from "./Content";
import { supabase } from "../../supabase";

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    let { data: posts, error } = await supabase.from("posts").select("*");
    setPosts(posts);
  };
  console.log(posts);

  return (
    <Container>
      <HomeLayoutWrapper>
        <HomeLayoutMainWrapper>
          <GridContainer>
            {posts.map((post) => (
              <Content key={post.id} post={post} />
            ))}
          </GridContainer>
        </HomeLayoutMainWrapper>
      </HomeLayoutWrapper>
    </Container>
  );
};

export default Contents;
