import React from 'react';
import './CommonContainer.css';
import { Container, Box, Image } from '@chakra-ui/react';
function CommonContainer() {
  return (
    <Container className="container-div" h={700} w="100%">
      <Box className="middle-div" w={500} h={500}></Box>
      <Container className="inner-container">
        <Box className="child1">
          <h2>Clean, Cruelty-Free,</h2>
          <h2>Dermatologist-Tested</h2>
          <p>
            We are a clean, cruelty-free, planet-friendly skincare brand that
          </p>
          <p>
            delivers transformative, dermatologist-tested products for total
          </p>
          <p>skin happiness.</p>
          <button className="btn">LEARN MORE</button>
          <br />
          <br />
          <button className="btn">SHOP BLISS</button>
        </Box>
        <Box className="child2" marginTop={30} marginLeft={250}>
          <Image
            w="80%"
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/hp-about-mobile.jpg"
            alt="img1"
          />
        </Box>
      </Container>
    </Container>
  );
}

export default CommonContainer;
