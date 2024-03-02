import React from 'react';
import styled from 'styled-components';

const colors = {
  one: '#990033',
  two: '#161623',
  negro: '#020202',
  blanco: '#ffffff',
  sombra: '#000000'
};

const color = (colorName) => {
  return colors[colorName];
};

const displayFlex = (justify, align, direction) => {
  return `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `;
};

const Container = styled.div`
  position: relative;
  z-index: 1;
  ${displayFlex('center', 'center', 'row')};
  flex-wrap: wrap;
  padding: 1em;
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 1em;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  ${displayFlex('center', 'center', 'column')};
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.03);
`;

const Content = styled.div`
  position: relative;
  ${displayFlex('center', 'center', 'column')};
  opacity: 0.5;
  transition: 0.5s;

  .img {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid rgba(0, 0, 0, 0.25);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cardContent {
    h3 {
      color: ${color('blanco')};
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      margin: 20px 0 10px;
      line-height: 1.1em;

      span {
        font-size: 12px;
        font-weight: 300;
        text-transform: initial;
      }
    }
  }
`;

const Sci = styled.ul`
  position: absolute;
  bottom: 50px;
  ${displayFlex('center', 'center', 'row')};

  li {
    margin: 0 10px;
    transform: translateY(40px);
    opacity: 0;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));

    a {
      font-size: 24px;
    }
  }
`;

const Team = () => {
  return (
    <div className="container">
      <div className="card">
        <Content>
          <div className="img"><img src="https://unsplash.it/200/200" alt="Profile" /></div>
          <div className="cardContent">
            <h3>Luis Molina<br /><span>Web Developer</span></h3>
          </div>
        </Content>
        <Sci>
          <li style={{ '--i': 1 }}>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li style={{ '--i': 2 }}>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li style={{ '--i': 3 }}>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
        </Sci>
      </div>
      <div className="card">
        <Content>
          <div className="img"><img src="https://unsplash.it/200/201" alt="Profile" /></div>
          <div className="cardContent">
            <h3>Someone Else<br /><span>Grafic Designer</span></h3>
          </div>
        </Content>
        <Sci>
          <li style={{ '--i': 1 }}>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li style={{ '--i': 2 }}>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li style={{ '--i': 3 }}>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
        </Sci>
      </div>
    </div>
  );
};

export default Team;
