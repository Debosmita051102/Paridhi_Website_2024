import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


import {
  HeroMain,
  CountdownContainer,
  CountdownItem,
  Title,
  TitleContainer,
  Typewriter,
  HeroText,
  HeroContainer,
  CountText,
  Footer,
  Middle,
  Btn,
  FontAwesomeIconStyled,
  DrippingDigit,
  Box,
  StyledContainer
} from "./Hero.styled";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    
    <CountdownContainer>
      <CountdownItem>
        <DrippingDigit>{timeLeft.days}</DrippingDigit>
        <CountText>Days</CountText>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>{timeLeft.hours}</DrippingDigit>
        <CountText>Hours</CountText>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>{timeLeft.minutes}</DrippingDigit>
        <CountText>Minutes</CountText>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>{timeLeft.seconds}</DrippingDigit>
        <CountText>Seconds</CountText>
      </CountdownItem>
    </CountdownContainer>
    
  );
};

const Hero = () => {
  const targetDate = new Date("2024-03-01T23:59:59");

  return (
    <>
      <StyledContainer>
        <HeroMain>
          <HeroContainer>
          <Title>
           
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700" />
        <div className="container">
          <Typewriter>
            Paridhi 2024
          </Typewriter>
        </div>
        
         </Title>
            <HeroText>
              The Inter-College TechFest Of Meghnad Saha Institute of Technology & Organised by MEGATRONIX, <br />
              The Official Technical Club of MSIT
            </HeroText>
           
            <CountdownTimer targetDate={targetDate} />
            
          </HeroContainer>

          <Footer>
              <Middle>
                 <Btn href="#">
                    <FontAwesomeIconStyled icon={faFacebook} />
                </Btn>
                 <Btn href="#">
                    <FontAwesomeIconStyled icon={faInstagram} />
                 </Btn>
                 <Btn href="#">
                     <FontAwesomeIconStyled icon={faLinkedin} />
                 </Btn>
                 <Btn href="#">
                     <FontAwesomeIconStyled icon={faYoutube} />
                 </Btn>
              </Middle>
        </Footer> 

        </HeroMain>
      </StyledContainer>
    </>
  );
};

export default Hero;