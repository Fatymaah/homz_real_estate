import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react';
import { baseUrl,fetchApi } from './utils/fetchApi';
import Property from './components/Property';
import Hero from "./components/Hero";


const Banner = ({ purpose,title1,title2,imageUrl,desc1,desc2,linkName,buttonText }) => (
 <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
  <Image src={imageUrl} width={500} height={500} alt='banner' />
  <Box p="5">
    <Text color="gray.500" fontSize="sm" fontWeight="medium" ></Text>
    <Text  fontSize="3xl" fontWeight="bold" >{title1} <br/> {title2}</Text>
    <Text  fontSize="lg" paddingBottom="3" paddingTop="3" color="gray.700">{desc1} <br/> {desc2}</Text>
    <Button fontSize="xl">
      <Link href={linkName}><a>{buttonText} </a></Link>
    </Button>
  </Box>
 </Flex>
)
export default function Home({ propertiesForSale, propertiesForRent}) {
  return (
   
    <Box>
      <Hero/>
      <Banner 
      purpose="RENT A HOME"
      title1="Rental Houses For"
      title2="Everyone"
      desc1="Explore Aparment, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/170246603/c38c89d3a9d449e9a649100fb9cffff2"
       /> 
       
       <Flex justifyContent='center' alignItems='center' flexDirection='column'>
         <Text color="orange.500" fontSize="sm" fontWeight="medium" >Best Choice</Text>
        <Text  fontSize="3xl" fontWeight="bold" >Popular Rentals</Text>
       </Flex>
       
       <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property property= {property} key={property.id}/>)}
       </Flex>
      <Banner
       purpose="Buy A HOME"
       title1="Find, Buy & Own Your"
       title2="Dream Home"
       desc1="Explore Aparment, Villas, Homes"
       desc2="and more"
       buttonText="Explore Buying"
       linkName="/search?purpose=sale"
       imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/170467641/5d7f6f7c78c34fd2a4f3d4d2d69d7716"
      />

        <Flex justifyContent='center' alignItems='center' flexDirection='column'>
                <Text color="orange.500" fontSize="sm" fontWeight="medium" >Luxury Houses</Text>
                <Text  fontSize="3xl" fontWeight="bold" >Popular Modern Houses</Text>
        </Flex>

        <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => <Property property= {property} key={property.id}/>)}
       </Flex>
    </Box>
  )
}


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits
    }
  }

}
