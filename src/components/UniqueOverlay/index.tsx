/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {

  const {scrollYProgress} = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0,1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>
      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Matheus Carvalho</a>
          </li>
          <li>
            <a href="#">2020</a>
          </li>
          <li>
            <a href="#">Thanks RocketSeat</a>
          </li>
        </ul>  
      </Footer> 
    </Container>
  );
};

export default UniqueOverlay;
