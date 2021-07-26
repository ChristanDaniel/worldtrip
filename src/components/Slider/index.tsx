import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderProps {
    continents:{
      slug: string;
      title: string;
      summary: string;
      image: string;
    }[]
  }


export default function Slider({continents}: SliderProps) {
    return (
      <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay:4000,
          }}
          style={{width: '100%', flex: '1'}}
        > 
    )
}