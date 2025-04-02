// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
// import ImageIcon from '@mui/icons-material/Image';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import MicIcon from '@mui/icons-material/Mic';
// import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
// import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
// import { Input, } from '@mui/joy';
import { Avatar, Box, Stack, Typography, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import proimg from '../../assets/peakpx.jpg';
import SendIcon from '@mui/icons-material/Send';
// import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getSocket } from '../../socket';
import { useChatDetailsQuery } from '../../redux/api/api';





const Chat = () => {

  const [message, setMessage] = useState("");
  const id = 1;
  const messages = [
    { id: 1, user: "Alice", message: "Hey there! How's it going?" },
    { id: 2, user: "Bob", message: "I'm good! Just working on a new project. What about you?" },
    { id: 1, user: "Alice", message: "That's awesome! I'm learning React and experimenting with Material UI." },
    { id: 2, user: "Bob", message: "Nice! Material UI is pretty cool. Are you building something specific?" },
    { id: 1, user: "Alice", message: "Yeah, I'm working on a chat app actually. Trying to make the UI look neat and modern." },
    { id: 2, user: "Bob", message: "Sounds cool! If you need any help with state management or component logic, let me know." },
    { id: 1, user: "Alice", message: "For sure! By the way, what are you building in your project?" },
    { id: 2, user: "Bob", message: "Oh, it's a dashboard app with multiple charts, analytics data, and some real-time updates. Pretty complex but fun!" },
    { id: 1, user: "Alice", message: "Wow, that sounds impressive! Real-time updates are always tricky to implement." },
    {
      id: 2,
      user: "Bob",
      message: "Yeah, especially when handling multiple data sources. I'm using WebSocket to manage the real-time part and it's been pretty smooth so far. The tricky part is optimizing performance when data spikes during peak hours."
    },
    { id: 1, user: "Alice", message: "That's cool! I'm still figuring out WebSocket. Got any tips?" },
    {
      id: 2,
      user: "Bob",
      message: "For sure! The key is to keep your socket connection clean and manage reconnections properly. Also, batching updates instead of sending individual messages can improve performance significantly."
    },
    { id: 1, user: "Alice", message: "That's gold! Thanks a lot. I'll try that." },
    { id: 2, user: "Bob", message: "Anytime! Good luck with your chat app. Let me know if you hit any roadblocks." },
    { id: 1, user: "Alice", message: "Will do! Thanks again 😊" },
  ];

  const chatDetails = useChatDetailsQuery({ chatId: "67ed3658d24ab1bc49bf7c47" });
  console.log(chatDetails)

  const socket = getSocket();

  const sendMessageHandler = (e: any) => {
    e.preventDefault();
    if (!message.trim()) return
    console.log(message);
    socket?.emit("NEW_MESSAGES", { chatId: '67ed3658d24ab1bc49bf7c47', members: ['memeber'], message: message })
    setMessage("");
  }


  return (
    <Stack sx={{
      border: 2,
      borderColor: "green",
      height: "", width: ["100%", "80%"], margin: "auto"
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
          borderColor: "blue",
          width: ["100%", "60%"],
          height: ["100%", "100%"]
        }}>

          <Box sx={{
            display: "flex",
            border: 2,
            justifyContent: "space-between",
            alignItems: "center",
            width: ["100%", "60%"],
            height: "15%"
          }}>
            <Link to={'/message'}>
              <KeyboardBackspaceIcon style={{ fontSize: "2rem", color: "black" }} />
            </Link>
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

            <Link to={'/cam'}><VideocamIcon sx={{ fontSize: ["2rem", "3rem"], textDecoration: "none", color: "black" }} /></Link>
            <Link to={'#'}><PhoneIcon sx={{ fontSize: ["2rem", "3rem"], textDecoration: "none", color: "black" }} /></Link>
            <Link to={'#'}><MoreVertIcon sx={{ fontSize: ["2rem", "3rem"], textDecoration: "none", color: "black" }} /></Link>

          </Box>
          {/* Chat */}

          <Paper elevation={3} sx={{
            backgroundColor: 'white',
            // height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
          }}>

            {/* Chat Box */}
            <Box className="Chatbox" sx={{
              flexGrow: 1,
              overflowY: 'auto',
              maxHeight: '70vh',
              padding: '10px'
            }}>
              {messages.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: item.id === id ? "flex-end" : "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: item.id === id ? "#dc3545" : "#f1f1f1",
                      color: item.id === id ? "white" : "black",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      maxWidth: "60%",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.message}
                  </Box>
                </Box>
              ))}
            </Box>
            {/* Input Box */}
            <Box sx={{
              // height: '15%',
              display: 'flex',
              alignItems: 'center',
              borderTop: '2px solid rebeccapurple',
              // mb: "80px"
            }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  backgroundColor: 'white',
                  fontSize: '1.2vmax'
                }}
              />
              <Button
                onClick={sendMessageHandler}
                variant="contained"
                color="error"
                sx={{ width: '20%' }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Stack>

  )
}

export default Chat