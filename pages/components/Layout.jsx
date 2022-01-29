import Head from "next/head";
import {Box} from '@chakra-ui/react';
import Navbar from "./Navbar";
import Footer from "./Footer";




const Layout = ({ children }) => {
 return <>
  <Head>
      <title>Homz</title>
  </Head>
  <Box maxWidth='1280px' m='auto'>
      <header>
          <Navbar/>
      </header>
        <main>
       {children}
        </main>
        <Footer>
            <Footer/>
        </Footer>
  </Box>
  </>
};

export default Layout;