import Link  from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, MenuIcon, Flex, Box, Spacer, IconButton } from '@chakra-ui/react';
import { FcMenu,FcHome, FcAbout, FcSearch } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import styled from 'styled-components';


const Nav = styled.nav`
height:60px;
background:#08080A;
color:#fff;
display:flex;
justify-content:space-around;
align-items:center;
`;

const Logo = styled.a`
color:orange;
font-size:1.5rem;
`;

const Slink = styled.a`
padding:0;
background:#08080A;

@media screen and (max-width:768px){
    display:none;
}
`;

const btn = styled.button`
background:#192BAA;
width:20px;
`

const Navs = styled.div`
visibility:hidden;
color:#000;
@media screen and (max-width:768px){
    visibility:visible;
}
`;




const Navbar = () => {
  return <Nav>
      <div>
      <Link href='/' passHref>
        <Logo>Homz</Logo>
    </Link> 
      </div>
    <Link href='/' passHref>
        <Slink>Home</Slink>
    </Link>
    <Link href='/search' passHref>
        <Slink>Search</Slink>
    </Link>
    <Link href='/search?purpose=for-rent' passHref>
        <Slink>Rent Property</Slink>
    </Link>
    <Link href='/search?purpose=for-sale' passHref>
        <Slink>Buy Property</Slink>
    </Link>
    {/* <Link href='/search' passHref>
    <btn>Contact</btn>
    </Link> */}
    
    
    <Navs>
         <Menu>
              <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='white.400'/>
              <MenuList>
                  <Link href='' passHref>
                      <MenuItem icon={<FcHome/>}>Home</MenuItem>
                  </Link>
                  <Link href='/search' passHref>
                      <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                  </Link>
                  <Link href='/search?purpose=for-rent' passHref>
                      <MenuItem icon={<FcAbout/>}>Rent Property</MenuItem>
                  </Link>
                  <Link href='/search?purpose=for-sale' passHref>
                      <MenuItem icon={<FiKey/>}>Buy Property</MenuItem>
                  </Link>
              </MenuList>
          </Menu>
      
      </Navs>

</Nav>
  ;
};

export default Navbar;
