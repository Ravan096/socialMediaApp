import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { Input } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Header = () => {
  return (
    <Box sx={{
      // border: 1,
      position: ["fixed", "fixed"],
      bottom: [0, "none"],
      zIndex: 1000,
      height: ["8%", "100vh"],
      width: ["100%", "20%"],
      // borderColor: ["greenyellow", 'red'],
      display: "flex",
      flexDirection: ['row', 'column'],
      alignItems: ["center", "center"],
      justifyContent: ["space-between", "normal"],
      bgcolor: "white",
      boxShadow: 3
    }}>
      {/* <Box sx={{width:"20%",
                  textAlign:"center",
                  // border:1,
                  display:"flex",
                  alignContent:"center",
                  justifyContent:'space-evenly'
                  }}>

        <InstagramIcon style={{fontSize:"3rem"}}/>
        <Typography variant='h4' display={["none","block"]} fontFamily={"cursive"}>
          Instagram
        </Typography>
        </Box> */}

      <Box sx={{
        // border: 1,
        width: "40%",
        display: ["none", "none"],
        alignItems: "center",
        justifyContent: "center"
      }}>

        <SearchIcon style={{ fontSize: "2rem", color: "gray" }} />
        <Input placeholder='Search' variant='outlined' />
      </Box>

      <Box sx={{
        // border: 1,
        width: ["100%", "80%"],
        display: "flex",
        flexDirection: ["row", "column"],
        justifyContent: ["space-evenly", "space-around"],
        alignItems: ["center", "start"],
        // borderColor: "blue",
        height:["100%","30%"]
      }}>

        <Link to={'/home'} style={{ display: "flex",  alignItems: "center", textDecoration: "none", color: "black", width: "40%", justifyContent: "space-around" }}>
          <HomeOutlinedIcon style={{ fontSize: "2.5rem", color: "black" }} />
          <Typography sx={{ display: { xs: "none", md: "block" } }}>Home</Typography></Link>
        {/* <TelegramIcon style={{fontSize:"2.5rem"}}/> */}
        <Link to={'/search'} style={{ display: "flex",  alignItems: "center", textDecoration: "none", color: "black", width: "40%", justifyContent: "space-around" }}>
          <SearchIcon style={{ fontSize: "2.5rem", color: "black" }} />
          <Typography sx={{ display: { xs: "none", md: "block" } }}>Search</Typography>
        </Link>
        <Link to={'/explore'} style={{ display: "flex",  alignItems: "center", textDecoration: "none", color: "black", width: "40%", justifyContent: "space-around" }}>
          <AddBoxIcon style={{ fontSize: "2.5rem", color: "black" }} />
          <Typography sx={{ display: { xs: "none", md: "block" } }}>Explore</Typography>
        </Link>
        <Link to={'/reels'} style={{ display: "flex",  alignItems: "center", textDecoration: "none", color: "black", width: "40%", justifyContent: "space-around" }}>
          <SubscriptionsIcon style={{ fontSize: "2.5rem", color: "black" }} />
          <Typography sx={{ display: { xs: "none", md: "block" } }}>Reels</Typography>
        </Link>
        <Link to={'/userprofile'} style={{ display: "flex",  alignItems: "center", textDecoration: "none", color: "black", width: "40%", justifyContent: "space-around" }}>
          <PermIdentityOutlinedIcon style={{ fontSize: "2.5rem", color: "black" }} />
          <Typography sx={{ display: { xs: "none", md: "block" } }}>Profile</Typography>
        </Link>
      </Box>

    </Box >
  )
}

export default Header