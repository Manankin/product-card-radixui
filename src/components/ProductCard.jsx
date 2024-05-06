import { Grid, Container, Flex, Box, Badge, Tabs, Text, Heading, Progress } from '@radix-ui/themes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import cn from 'classnames';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../styles/product.css';

const oneProduct = {
  id: 13,
  name: 'Mixer SMEG SMFG03DGU',
  price: 1190.99,
  rating: {
    average: 4.8,
    responses: 16
  },
  color: {
    code: '#800080',
    color_name: 'sky blue',
    available: [
      {code:'#000000', color_name: 'black'},
      {code:'#87ceeb', color_name: 'sky blue'},
      {code:'#800080', color_name: 'violet'},
      {code:'#f08080', color_name: 'light brown'},
      {code:'#e0ffff', color_name: 'light grass'},
    ]
  },
  features: [
    { id: 1, name: 'Power Consumption', value: '800 W' },
    { id: 2, name: 'Planetary motion of nozzies', value: 'Yes' },
    { id: 3, name: 'Weight', value: '9.5kg' },
    { id: 4, name: 'Country', value: 'Italy' },
    { id: 5, name: 'model', value: 'SMFG03DGU' },
    { id: 6, name: 'power cord length', value: '1.5m' },
    { id: 7, name: 'Bowl volume', value: '4.8L' },
  ],
  images: [
    {id: 1, src: 'https://www.kitchenthings.co.nz/media/catalog/product/S/m/Smeg_SMF03CRAU_3165.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=597&width=597&canvas=597:597'},
    {id: 2, src: 'https://stylus.ua/cdn-cgi/image/width=500,height=500,fit=pad,f=webp/gallery/af/d6/2858471.png'},
    {id: 3, src: 'https://stylus.ua/cdn-cgi/image/width=500,height=500,fit=pad,f=webp/gallery/00/bd/2858469.png'},
    {id: 4, src: 'https://assets.4flow.cloud/SMF03CREU.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVODhjY3hvOUVYUTZ2REIvRlhBeWc5eVR0eWRaVENydHZpRjJycnFlNGg0b2tIZDF3WVY1NVFOaXVKbFBEWlRFTDI2czNlMndSZVM2Ni9RcTNmUWxhU0ZYT0owZkdJaEhwRzI1VnVkM0lsTXEzWGpVMFUwNVQxSHl1bmxxYmV4LzdGcnhEUGhNZUZmaXUvMEZvRDRXYWxZPQ'},
  ]
}

export default function ProductCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {price, name, features, color, rating, images} = oneProduct;

  const [favorite, setFavorite] = useState(false)
  const [curColor, setCurColor] = useState(color.available[1]);
  const [goodCounter, setGoodCounter] = useState(0);

  function increment() {
    return setGoodCounter(goodCounter + 1);
  }

  function decrement() {
    if (goodCounter === 0) {
      return;
    }

    return setGoodCounter(goodCounter - 1);
  }

  return (
    <Grid columns="2" gap="3" width="auto" justify="center" className="card">
      <Container className="photo-block">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images.map((image) => (
            <SwiperSlide key="image.id">
              <img src={image.src} alt='main mixer'/>
            </SwiperSlide>
          ))}
          <span
            className={cn('is-clickable', 'favorite-icon', {'is-favorite': favorite})}
            onClick={() => setFavorite(!favorite)}
          >
          </span>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={7}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key="image.id">
              <img src={image.src} alt='main mixer'/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Flex direction="column" className="card__info" >
        <Flex direction="row" justify="between" mb="6">
          <Flex direction="column" gap="0" >
            <Heading mb="0" size="6">{name}</Heading>
            <Text className='product__rate' size="1" weight="medium">rating: {rating.average} ({rating.responses})</Text>
          </Flex>
          <Heading mb="2" size="6">${price}</Heading>
        </Flex>

        <Flex className="colors" mb="6" direction="column" >
          <Heading size="4">
            Color: 
            <Text size="4" weight="light"> {curColor.color_name}</Text>
          </Heading>
          {/* <div>
            Color: {curColor.color_name}
          </div> */}
          <Flex direction="row" justify="start" gap="2" align="center">
            {color.available.map((c) => (
              <div
                key="c"
                style={{
                  backgroundColor: c.code,
                  height: '24px',
                  width: '24px',
                  borderRadius: '2px'
                }}
                className={cn('is-clickable', {'outline': curColor === c})}
                onClick={() => {setCurColor(c)}}
              >
              </div>
            ))}
          </Flex>
        </Flex>
        <div clas mb="6" direction="column" sName="divider"></div>

        <Flex justify="center" gap="1" align="center" mb="6" >
          <Box width="40%" align="center" className="counter-box">
            <Badge
              radius="small" size="3" variant="surface" color="gray"
              className="is-clickable"
              onClick={decrement}
            >
              -
            </Badge>
            <Badge radius="small" size="3" variant="surface" color="gray">{goodCounter}</Badge>
            <Badge
              radius="small" size="3" variant="surface" color="gray"
              className="is-clickable"
              onClick={increment}
            >
              +
            </Badge>
          </Box>
          <Box width="60%" align="center" className="add-button-box">
              Add to bag
          </Box>
        </Flex>

        <Tabs.Root defaultValue="account">
          <Tabs.List className="tabs-list">
            <Tabs.Trigger value="features">features</Tabs.Trigger>
            <Tabs.Trigger value="reviews">reviews</Tabs.Trigger>
            <Tabs.Trigger value="delivery">delivery</Tabs.Trigger>
            <Tabs.Trigger value="faq">faq</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            {features.map((item) => (
              <Tabs.Content
                value="features"
                key="item.id"
                className={cn('features-info', {'bg-grey': item.id % 2 === 0})}
              >
                <Text size="2" className="half-block">{item.name}</Text>
                <Text size="2">{item.value}</Text>
              </Tabs.Content>
            ))}

            <Tabs.Content value="reviews">
              <Text size="2">There are no any review yet</Text>
            </Tabs.Content>

            <Tabs.Content value="delivery">
              <Text size="2">We work with NovaPost of Ukraine</Text>
            </Tabs.Content>

            <Tabs.Content value="faq">
              <Text size="2">This block is developing now. Sorry.</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
    </Grid>
  )
}
