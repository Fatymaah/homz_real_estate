import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Avatar} from '@chakra-ui/react';
import styled from 'styled-components';
import home from '/assets/images/home.jpg'


const HeroSection = styled.section`
height:100vh;
max-width1100px;
position:relative;
overflow:hidden;
background:#08080A;
`;
const Gray = styled.div`
  height: 140%;
  width:70%;
  position:absolute;
  top:8rem;
  right:2rem;
  background-color: black;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  overflow: hidden;  
  z-index:1000;


  @media screen and (max-width:999px){
    display:none;
  }
  @media screen and (max-width:1000px){
    height: 190%;
    width:35%;
    position:absolute;
    top:8rem;
    right:2rem;
    background-color: black;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    overflow: hidden;  
    z-index:1000;
  }
`

const Hero = () => {
  return <HeroSection>
       <Flex flexWrap="wrap" justifyContent="start" m="70">
           <Text  fontSize="4xl" fontWeight="bold"color="white" alignItems='center' lineHeight='1.5' marginBottom='0'>Discover <br/> Most Suitable <br/> Property</Text>
        </Flex>   
        
          <Box m='70' marginTop='2'>
          <Text  fontSize="sm" paddingBottom="1"  color='gray.300'>Lorem ipsum dolor sit amet consectetur..<br/>Lorem ipsum dolor sit.</Text>
          </Box>
     
      <Gray>
       <Image src={home} objectFit='contain' w={400} h={5666} alt='hero' />
      </Gray>
  </HeroSection>;
};

export default Hero;
