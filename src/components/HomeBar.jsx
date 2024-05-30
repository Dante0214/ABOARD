import styled, { css } from "styled-components";
import {
  WhiteColor1,
  WhiteColor2,
  DarkColor1,
  DarkColor2,
  BrandColor1,
} from "../assets/style/theme";

const HomeBar = ({ isOpen, setIsOpen, children }) => {
  return <div></div>;
};

const HomeBarWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  bottom: 0;
  z-index: 0;
  transition: z-index 0.25s ease-in;
`;
const HomeBarInnerWrapper = styled.div`
  margin-top: 0.5rem;
  width: 12rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0px;
  background: ${WhiteColor1};
  color: ${DarkColor1};
  transform-origin: right top;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s, z-index 0.35s ease-in;
  transform: scale(0);

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: scale(1);
    `}

  .contact {
    line-height: 1rem;
    border-top: 1px solid ${WhiteColor1};
    padding: 1rem;
    h5 {
      margin: 0px;
      font-size: 0.75rem;
    }
    .email {
      color: ${DarkColor2};
      font-size: 0.75rem;
    }
  }

  .checked {
    color: ${WhiteColor2};
    background: ${BrandColor1};
  }
`;

export default HomeBar;
