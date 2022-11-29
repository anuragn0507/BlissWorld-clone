import React, { useState } from 'react';
import '../Slider/Slider.css';
import styled from 'styled-components';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { SliderItems } from '../Data';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
 
  position: relative;

  overflow:hidden ;
`;


const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:white ;
  border-radius:50% ;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left:10px;
  margin: auto;
left:${(props) => props.direction === 'left' && '10px'} ;
right:${(props) => props.direction === 'right' && '10px'} ;
cursor:pointer;
  opacity:0.5;
  z-index:2 ;
`;

const Wrapper = styled.div`
  height: 100%;
  display:flex ;
  transform:translateX(${props=>props.slideIndex*-100}vw)  ;
  text-align:left ;
  transition:all 1.5s ease ;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #${(props)=>props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;

  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-family: 'Allerta Stencil', sans-serif;
   
`;
const Description = styled.p`
  font-family: 'Arvo', serif;
  margin: 40px 0px ;
`;
const Button = styled.button`
  font-family: 'Allerta Stencil', sans-serif;

`;



function Slider() {
  const [slideIndex,setSlideIndex]=useState(0);

  const handleClick = (direction)=>{
    if(direction==="left")
    {
      setSlideIndex(slideIndex>0?slideIndex-1:2)
    }
    else

  {
    setSlideIndex(slideIndex<2?slideIndex+1:0);

  }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <KeyboardDoubleArrowLeftIcon />
      </Arrow>
      { console.log(SliderItems)}
      <Wrapper slideIndex={slideIndex}>
        {
         
          SliderItems.map((element,index)=>{
            
            
           return <Slide bg={element.backcolor} key={index+1}>
          <ImageContainer>
            <Image
              src={element.image}
              alt={element.title}
            />
          </ImageContainer>

          <InfoContainer>
            <Title>{element.title}</Title>
            <Description>
              {element.description}
            </Description>
            <Button id="neonShadow">{element.btnname}</Button>
          </InfoContainer>


        </Slide>
        })

        }
        
      </Wrapper>

      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <KeyboardDoubleArrowRightIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
