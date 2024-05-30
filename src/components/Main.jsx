import styled from "styled-components";
import { DarkColor2, DarkColor3, DarkColor4 } from "../assets/style/theme";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <MenuWrapper>
      <SelectWrapper>
        <div>
          <Link to="/" className="active">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
            트렌딩
          </Link>
          <Link to="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            최신
          </Link>
          <div className="line" />
        </div>
      </SelectWrapper>
    </MenuWrapper>
  );
};
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  height: 3rem;
`;
const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > div:first-child {
    position: relative;
    display: flex;
    width: 14rem;

    & > a {
      display: flex;
      width: 7rem;
      align-items: center;
      justify-content: center;
      font-size: 1.125rem;
      text-decoration: none;
      color: ${DarkColor4};
      height: 3rem;
      transition: color 0.5s ease-in, font-weight 0.5s ease-in;
      & > svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
      &.active {
        color: ${DarkColor2};
        font-weight: bold;
      }
    }
  }

  .line {
    bottom: 0;
    position: absolute;
    height: 2px;
    background-color: ${DarkColor3};
    width: 50%;
    transition: transform 0.25s ease-in;
    &.active {
      transform: translateX(100%);
    }
  }
`;

export default Main;
