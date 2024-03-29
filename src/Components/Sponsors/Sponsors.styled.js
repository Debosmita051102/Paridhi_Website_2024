import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  
  50% {
    transform: translate(0px);
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
  
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
`;

export const Box = styled.div`
  position: relative;
  width: 320px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
  

  /* &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 70px;
    width: 50%;
    height: 100%;
    text-decoration: none;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
  }

  &:after {
    content: '';
    position: relative;
    top: 0;
    left: 50;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(0px);
  } */

  &:hover:before,
  &:hover:after {
    transform: skewX(0deg);
    left: 20px;
    width: calc(100%  50px);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  &:nth-child(1):before,
  &:nth-child(1):after {
    background: linear-gradient(315deg, #0d2021, 	#cc4848);
    
  }

  &:nth-child(2):before,
  &:nth-child(2):after {
    background: linear-gradient(315deg, #222a43, 	#5d1517);
  }

  &:nth-child(3):before,
  &:nth-child(3):after {
    background: linear-gradient(315deg, 	#5d1317, #ff8c00);
  }

  span {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    pointer-events: none;

    &:before {
      content: '';
      position: relative;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: 0.1s;
      animation: ${animate} 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    &:hover:before {
      top: -50px;
      left: 0px;
      width: 100px;
      height: 100px;
      opacity: 1;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    &:after {
      content: '';
      position: relative;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: 0.5s;
      animation: ${animate} 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      animation-delay: -1s;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    &:hover:after {
      bottom: -50px;
      right: 0px;
      width: 100px;
      height: 100px;
      opacity: 1;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }
  }

  .content {
    position:absolute;
    left: 0;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
    width:20rem;
  }

  &:hover .content {
    /* left: -25px; */
    padding: 60px 40px;
  }

  h2 {
    font-size: 2em;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1em;
    margin-bottom: 10px;
    line-height: 1.4em;
  }

  a {
    display: inline-block;
    font-size: 1.1em;
    color: #111;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    margin-top: 5px;

    &:hover {
      background: #ffcf4d;
      border: 1px solid rgba(255, 0, 88, 0.4);
      box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
    }
  }
`;
