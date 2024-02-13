import { Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import MyBar from "./MyBar.js";
import {Box} from "@mui/material";

const Layout = ({location}) => {
  return (
    <>
      <MyBar />
      {/*<Container maxWidth={'xl'}>*/}
      {/*  <Box sx={{*/}
      {/*      marginBottom: '114px',*/}
      {/*  }}>*/}

      {/*  </Box>*/}
      <Outlet />
      {/*</Container>*/}

      <Footer path={location.pathname}/>
    </>
  );
};

export default Layout;
