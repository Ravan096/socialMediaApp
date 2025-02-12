import { Stack, Box, Typography, Avatar } from '@mui/material';
import { Input, } from '@mui/joy';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import proimg from '../../assets/peakpx.jpg';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MicIcon from '@mui/icons-material/Mic';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';





const Chat = () => {

  const [message, setMessage] = useState("");

  const sendHandler = () => {
    console.log(message);
    setMessage("")
  }







  return (
    <Stack sx={{
      border: 1,
      height: "96vh", width: ["100%", "80%"], margin: "auto"
    }}>




      {/* chat body start */}
      <Box sx={{ display: "flex", flexDirection: ["column", "row"], borderColor: "red", width: "100%" }}>
        {/* chat users list start */}
        <Box sx={{
          //  border:1,
          borderColor: "green",
          width: "40%",
          display: ["none", "block"]
        }}>

          <Box sx={{ display: "flex" }}>
            <Avatar
              src={proimg}
              sx={{
                //  border:1,
                borderColor: "greenyellow",
                height: 48,
                width: 48,
              }} />
            <Box>
              <Typography variant="h6">
                _nae11
              </Typography>
              <Typography>
                Instagram HQ
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={proimg}
              sx={{
                //  border:1,
                borderColor: "greenyellow",
                height: 48,
                width: 48,
              }} />
            <Box>
              <Typography variant="h6">
                _nae11
              </Typography>
              <Typography>
                Instagram HQ
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={proimg}
              sx={{
                //  border:1,
                borderColor: "greenyellow",
                height: 48,
                width: 48,
              }} />
            <Box>
              <Typography variant="h6">
                _nae11
              </Typography>
              <Typography>
                Instagram HQ
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={proimg}
              sx={{
                //  border:1,
                borderColor: "greenyellow",
                height: 48,
                width: 48,
              }} />
            <Box>
              <Typography variant="h6">
                _nae11
              </Typography>
              <Typography>
                Instagram HQ
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={proimg}
              sx={{
                //  border:1,
                borderColor: "greenyellow",
                height: 48,
                width: 48,
              }} />
            <Box>
              <Typography variant="h6">
                _nae11
              </Typography>
              <Typography>
                Instagram HQ
              </Typography>
            </Box>
          </Box>








        </Box>


        {/* chat content start */}
        <Box sx={{
          border: 1,
          borderColor: "red",
          width: ["100%", "60%"],
          height: ["100vh", "100%"]
        }}>

          <Box sx={{
            display: "flex",
            border: 2,
            justifyContent: "space-between",
            alignItems: "center",
            width: ["100%", "60%"],
            height: "15%"
          }}>

            <KeyboardBackspaceIcon style={{ fontSize: "3rem" }} />
            <Avatar
              src={proimg}
              sx={{
                //  border:1,
                borderColor: "greenyellow",
                height: 48,
                width: 48,
              }} />
            <Box>
              <Typography variant="h6">
                _nae11
              </Typography>
            </Box>

            <Link to={'/cam'}><VideocamOutlinedIcon sx={{ fontSize: ["2rem", "3rem"], textDecoration: "none", color: "black" }} /></Link>
            <Link to={'/cam'}><OutlinedFlagOutlinedIcon sx={{ fontSize: ["2rem", "3rem"], textDecoration: "none", color: "black" }} /></Link>
            <Link to={'/cam'}><InfoOutlinedIcon sx={{ fontSize: ["2rem", "3rem"], textDecoration: "none", color: "black" }} /></Link>

          </Box>
          {/* Chat */}
          <Box sx={{
            // border:1,
            borderColor: "blue",
            width: ["100%", '60%'],
            height: "85%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflowY: "auto",
            backgroundColor: "#f5f5f5"
          }}>

            <Box sx={{
              // border:1,
              height: "85%",
              width: "100%"
            }}>

              <Typography variant='h6' sx={{
                p: ["1", "0vh 1vh"],
                borderRadius: 2,
                float: "right",
                backgroundColor: "#b481de",
                maxWidth: "70%",
              }}>
                hi
              </Typography>
              <Typography variant='h6' sx={{
                display: "inline-block",
                p: 1,
                borderRadius: 2,
                float: "left",
                backgroundColor: "#acde81",
                maxWidth: "70%",
              }}>
                hello
              </Typography>
            </Box>

            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "10%", // Fixed height for input area
              width: "100%",
              borderTop: 1,
              paddingX: 2,
              backgroundColor: "white",
            }}>

              <Link to={'/cam'}><CameraAltIcon sx={{
                fontSize: ["2rem", "3rem"], backgroundColor: "#1280b0", color: "white",
                borderRadius: "25px", padding: ".5vh"
              }} /></Link>

              <Input variant="outlined"
                placeholder="Message..."
                sx={{ mt: 2, width: 1 / 2, mb: 1 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" ? sendHandler() : null}

              />
              <Link to={'/cam'}><MicIcon sx={{ fontSize: ["2rem", "3rem"] }} /></Link>
              <Link to={'/cam'}><ImageIcon sx={{ fontSize: ["2rem", "3rem"] }} /></Link>
              <Link to={'/cam'}><EmojiEmotionsOutlinedIcon sx={{ fontSize: ["2rem", "3rem"] }} /></Link>

            </Box>

          </Box>



        </Box>



      </Box>


    </Stack>

  )
}

export default Chat