import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100vw;
  font-family: 'Jost', sans-serif;
`;

export const Box = styled.div`
   position: absolute;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
  width:1050px;
`;

export const HeroMain = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroContainer = styled.div`
  height: 80%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0 0 10% 0;
`;



export const Title = styled.div`
  /* background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(222,57,36,1) 100%);

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  
  font-weight: bold; */
  
  font-size:5rem;
  text-align: center;
  
  font-weight:bold;
  letter-spacing:0.5rem;
  
  
`;



const cursorAnimation = keyframes`
  0%, 100% {
    border-color: #212121;
  }
`;


 const textAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 14ch;
  }
`; 

// Styled components
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: clamp(2rem, 2.8vw, 5rem);

  font-family: Raleway;
  font-weight: bold;
`;

export const Typewriter = styled.div`
  width: 21.5ch;
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 4px solid #212121; */
  /* animation: ${cursorAnimation} 1s step-start infinite;
  animation: ${textAnimation} 5s steps(18) alternate infinite; */
`;

export const HeroText = styled.div`
  font-size: large;
  text-align: center;
  @media (max-width: 600px) {
    font-weight: 800;
    padding: 3%;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  font-family: "Arial", sans-serif;
  text-align: center;
  margin-top: 50px;
  width: 100%;
  height: 30%;
  @media (max-width: 600px) {
    gap: 2%;
  }
`;

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
  font-size: 5rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;



export const CountText = styled.div`
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 10px;
    font-weight: 800;
  }
`;

const dripAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    transform: translateY(20%);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const DrippingDigit = styled.div``;



export const effect = keyframes`
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 10%;
    top: -30%;
  }
  100% {
    top: -10%;
    left: -10%;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37rem; /* Adjust the margin-top value as needed */
`;

export const Middle = styled.div`
  /* position: absolute; */
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  display:flex;
`;

export const Btn = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  display : flex;
  background: #f1f1f1;
  margin:1rem;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #3498db;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }

  &:before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: #3498db;
    transform: rotate(45deg);
    left: 100%;
    top: 90%;
  }

  &:hover::before {
    animation: ${effect} 0.7s 1;
    top: -10%;
    left: -10%;
  }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 20px; 
  padding:10px;
`;








