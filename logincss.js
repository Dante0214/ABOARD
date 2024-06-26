import styled from "styled-components";

const Container = styled.div`
  body {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #c4c3ca;
    background-color: #1f2029;
    overflow-x: hidden;
  }

  a {
    cursor: pointer;
    transition: all 200ms linear;
  }

  a:hover {
    text-decoration: none;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.7;
  }

  h4 {
    font-weight: 600;
  }

  h6 span {
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const Link = styled.a`
  color: #c4c3ca;
  &:hover {
    color: #ffeba7;
  }
`;

const Section = styled.div`
  position: relative;
  width: 100%;
  display: block;
`;

const FullHeight = styled.div`
  min-height: 100vh;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  left: -9999px;

  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    display: block;
    text-align: center;
    width: 60px;
    height: 16px;
    border-radius: 8px;
    padding: 0;
    margin: 10px auto;
    cursor: pointer;
    background-color: #ffeba7;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    position: absolute;
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #ffeba7;
    background-color: #102770;
    font-family: "unicons";
    content: "\\eb4f";
    z-index: 20;
    top: -10px;
    left: -10px;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
  }

  &:checked + label:before {
    transform: translateX(44px) rotate(-270deg);
  }
`;

const Card3DWrap = styled.div`
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
`;

const Card3DWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;

  ${Checkbox}:checked ~ & {
    transform: rotateY(180deg);
  }
`;

const CardSide = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2a2b38;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

const CenterWrap = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
`;

const FormGroup = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
`;

const FormStyle = styled.input`
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);

  &:focus,
  &:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }

  &::placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    transition: all 200ms linear;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  transition: all 200ms linear;
`;

const Button = styled.button`
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);

  &:active,
  &:focus {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }

  &:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;

  img {
    height: 26px;
    width: auto;
    display: block;
  }
`;
