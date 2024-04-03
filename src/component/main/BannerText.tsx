import greenZiro from "../../assets/items/greenZiro.svg";
import pinkZiro from "../../assets/items/pinkZiro.svg";
import { Box, Typography } from "@mui/material";
import { h3 } from "../../mui/palette";

const BannerText = () => {
   const mainTypo = {
      fontSize: { sm: "80px", xs: "40px" },
      lineHeight: { sm: "0.8", xs: "0.8" },
   };
   return (
      <>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
            }}>
            <Typography sx={mainTypo} component={"h1"}>
               ШОУ 1
            </Typography>
            <Box
               component={"img"}
               src={greenZiro}
               sx={{
                  width: { sm: "55px", xs: "25px" },
                  height: { sm: "82px", xs: "37px" },
               }}
            />
            <Typography sx={mainTypo}>0</Typography>
            <Box
               component={"img"}
               src={pinkZiro}
               sx={{
                  width: { sm: "55px", xs: "22px" },
                  height: { sm: "94px", xs: "40px" },
               }}
            />
         </Box>
         <Typography sx={mainTypo} component={"h1"}>
            МУЗЫКАНТОВ
         </Typography>

         <Typography sx={h3} component={"h1"}>
            29 июня 2024 г. на ЦСКА Арене (Москва)
         </Typography>
      </>
   );
};

export default BannerText;
