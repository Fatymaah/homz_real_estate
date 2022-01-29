import Head from "next/head";
import {Box} from '@chakra-ui/react';
import Navbar from "./Navbar";
import Footer from "./Footer";




const Layout = ({ children }) => {
 return <>
  <Head>
      <title>Homz</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  </Head>
  <Box maxWidth='1280px' m='auto'>
      <header>
          <Navbar/>
      </header>
        <main>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
       {children}
        </main>
        <Footer>
            <Footer/>
        </Footer>
  </Box>
  </>
};

export default Layout;