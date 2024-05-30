import styled from "styled-components";

const ContentBox = styled.li`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
`;

const Thumbnail = styled.a.attrs({
  href: "https://velog.io/@whatever/저-개발자-취준-포기해야-할까요",
})`
  display: block;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
`;

const ImgWapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 52.1921%;
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;
const TextBox = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;
const TextSummary = styled.h4`
  font-size: 1rem;
  margin: 0 0 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Text = styled.p`
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  word-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
`;

const TextSubInfo = styled.div`
  margin-top: auto;
  font-size: 0.75rem;
  line-height: 1.5;
`;
const Separator = styled.span`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;
const FooterWrapper = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;
const Content = ({ post }) => {
  return (
    <ContentBox>
      <Thumbnail>
        <ImgWapper>
          <Img src="https://velog.velcdn.com/images/whatever/post/449defa4-cf25-4f5c-813a-5082bb3cc471/image.png" />
        </ImgWapper>
      </Thumbnail>
      <Thumbnail>
        <TextBox>
          <TextSummary>{post.title}</TextSummary>
          <div>
            <Text>{post.content}</Text>
          </div>
          <TextSubInfo>
            <span>2일 전</span>
            <Separator>·</Separator>
            <span>{post.comments}</span>
          </TextSubInfo>
        </TextBox>
        <FooterWrapper></FooterWrapper>
      </Thumbnail>
    </ContentBox>
  );
};

export default Content;
