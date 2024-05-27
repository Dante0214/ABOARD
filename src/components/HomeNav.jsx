import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const TabWrapper = styled.nav`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;
const HomeTab = styled.div`
  display: flex;
  position: relative;
`;

const HomeTabActive = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  -webkit-text-decoration: none;
  text-decoration: none;
  white-space: nowrap;
`;

const HomeNav = () => {
  return (
    <Container>
      <TabWrapper>
        <HomeTab>
          <HomeTabActive>
            <span>트렌딩</span>
          </HomeTabActive>
          <HomeTabActive>
            <span>최신</span>
          </HomeTabActive>
          <HomeTabActive>
            <span>피드</span>
          </HomeTabActive>
        </HomeTab>
      </TabWrapper>
    </Container>
  );
};

export default HomeNav;
