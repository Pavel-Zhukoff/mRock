import { Box, Container, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowBack from "../assets/back/leftArrow.png";
import arrowBackRight from "../assets/back/rightArrow.png";
import slider1 from "../assets/slides/slide1.png";
import slider2 from "../assets/slides/slide2.png";
import slider3 from "../assets/slides/slide3.png";
import slider4 from "../assets/slides/slide4.png";
import {
   aboutSwitch,
   musiciansSwitch,
   sliderSwitch,
} from "../handlers/sliderSwitch";
import { h3, title2 } from "../mui/palette";

const MySwiper = ({
   random = false,
   about = false,
   slides = [
      {
         avatar: slider2,
         name: "Сергей Денисенко",
         role: "директор",
      },
      {
         avatar: slider3,
         name: "Алексей Куликов",
         role: "кастинг-директор",
      },
      {
         avatar: slider4,
         name: "Маргарита Илющенко",
         role: "режиссер",
      },

      {
         avatar: slider1,
         name: "Светлана Шабаева-Маркина",
         role: "продюсер",
      },
   ],
   sx,
}) => {
   const arrowStyle = {
      transform: "translateX(-58%) !important",

      color: "white",
      width: { sm: "58px", xs: "50px" },
      height: { sm: "53px", xs: "50px" },
   };
   return (
      <Container sx={sx}>
         <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={50}
            style={{
               position: "relative",
               zIndex: 500,
               overflow: "visible",
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 50,
               modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container animate__animated animate__bounceIn wow">
            {!about &&
               slides.map((item, index) => {
                  let styles;
                  random
                     ? (styles = musiciansSwitch(index))
                     : (styles = sliderSwitch(index));
                  let imageStyle = styles[0];
                  let textStyle = styles[1];
                  return (
                     <SwiperSlide
                        key={item}
                        className="fix-slider"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           flexDirection: "column",
                        }}>
                        <Box
                           component={"img"}
                           src={item.avatar}
                           sx={{
                              ...imageStyle,
                              objectFit: "cover",
                              maxWidth: "300px",
                              borderRadius: "10px",
                           }}
                        />
                        <Typography
                           sx={{
                              // ...blackText,
                              ...title2,
                              ...textStyle,
                              marginTop: "10px",
                           }}>
                           {item.name}
                        </Typography>
                        <Typography
                           sx={{
                              // ...blackText,
                              ...h3,
                              ...textStyle,
                              marginTop: "10px",
                           }}>
                           {item.role}
                        </Typography>
                     </SwiperSlide>
                  );
               })}
            {about &&
               slides.map((item, index) => {
                  const imgStyle = aboutSwitch(index);
                  return (
                     <SwiperSlide
                        key={item}
                        style={{
                           display: {
                              lg: "none",
                              md: "flex",
                              sm: "flex",
                              xs: "flex",
                           },
                           alignItems: "center",
                           justifyContent: "center",
                           flexDirection: "column",
                           marginLeft: "80px",
                           marginRight: "250px",
                        }}>
                        <Box
                           src={item}
                           component={"img"}
                           sx={{
                              ...imgStyle,
                           }}
                        />
                     </SwiperSlide>
                  );
               })}
            {!random && !about && (
               <Box
                  className="slider-controler"
                  sx={{
                     // marginTop: {sm: '470px', xs: '-12%'},
                     position: "relative",
                     margin: "0 auto",
                     zIndex: 1000,
                     marginBottom: "200px",
                     paddingTop: "50px",
                     display: "flex",
                     justifyContent: "center",
                     width: "150px",
                  }}>
                  <Box
                     className="swiper-button-prev slider-arrow"
                     sx={{
                        ...arrowStyle,
                        // left: '36%',
                        background: `url(${arrowBack})`,
                        // padding: {sm: '25px 25px 26px 15px', xs: '25px 25px 26px 20px'}
                     }}></Box>
                  <Box
                     className="swiper-button-next slider-arrow"
                     sx={{
                        ...arrowStyle,
                        background: `url(${arrowBackRight})`,
                        // right: {lg: '29%', md: '25%', sm: '24%', xs: '23%'},
                        // padding: {sm: '25px 15px 26px 25px', xs: '25px 21px 26px 28px'}
                     }}></Box>
               </Box>
            )}
         </Swiper>
      </Container>
   );
};

export default MySwiper;
