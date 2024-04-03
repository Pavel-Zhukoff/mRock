import { Box, Typography } from "@mui/material";
import BlackBackground from "../utils/BlackBackground";
import ideaItem2 from "../assets/items/item7.svg";
import IdeaBanner from "../component/idea/IdeaBanner";
import Swiper from "../utils/Swiper";
import Partners from "../component/main/Partners";

const IdeaPage = () => {
   return (
      <>
         <Box
            sx={{
               zIndex: 150,
               // position: 'relative',
               // marginBottom: '300px',
            }}>
            <BlackBackground />
            <IdeaBanner />
         </Box>

         <Box
            sx={{
               position: "relative",
               zIndex: 500,
               textAlign: "center",
               width: { md: "65%", sm: "80%", xs: "100%" },
               margin: "0 auto",
            }}
            className={"animate__fadeInUp animate__animated wow"}>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}>
               <Typography variant={"h2"}>Мы —</Typography>
               <Box
                  component={"img"}
                  src={ideaItem2}
                  sx={{
                     width: { sm: "216px", xs: "123px" },
                     height: { sm: "52px", xs: "27px" },
                  }}
               />
               <Typography variant={"h2"}>которая делает</Typography>
            </Box>
            <Typography variant={"h2"}>
               масштабное событие незабываемым
            </Typography>
         </Box>
         <Swiper />
         <Partners />
      </>
   );
};

export default IdeaPage;
