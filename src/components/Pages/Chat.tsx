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
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import proimg from '../../assets/peakpx.jpg';
import SendIcon from '@mui/icons-material/Send';
// import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getSocket } from '../../socket';
import { useChatDetailsQuery, useGetMessagesQuery } from '../../redux/api/api';
import { useAppSelector } from '../../redux/hooks';


// export interface AllMessage {
//   _id: string;
//   content: string;
//   senderId: string;
//   recieverId: string;
//   timestamp: Date;
//   __v: number;
// }

export interface AllMessage {
  _id: string;
  content: string;
  senderId: SenderID;
  chat: string;
  timestamp: Date;
  __v: number;
}

export interface SenderID {
  Avatar: Avatar;
  _id: string;
  FullName: string;
}

export interface Avatar {
  public_id: string;
  url: string;
}



const Chat = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<AllMessage[]>([])
  const { chatId } = useParams();
  const { user } = useAppSelector(x => x.userslice);
  const scrollRef = useRef<HTMLDivElement | null>(null);


  const { data: chatDetails } = useChatDetailsQuery({ chatId: chatId });
  const { data: messagesData } = useGetMessagesQuery({ chatId }, { skip: !chatId });

  // console.log("user", user)
  // console.log("this is chat details", chatDetails)
  // console.log("this is message for this user", messagesData);
  // const otherUser = chatDetails.chat.participants.filter((p: any) => p._id !== user?.user._id)
  // const { data: getUserMessages } = useGetMessagesQuery({ userId: userId });

  // useEffect(() => {
  //   if (getUserMessages) {
  // Handle the chat details data
  // console.log(chatDetails);
  //     console.log("allMessages", getUserMessages.allMessages);
  //     setMessages(getUserMessages.allMessages)
  //   }
  // }, [getUserMessages]);


  const socket = getSocket();


  // load existing message on mount
  useEffect(() => {
    if (messagesData?.message) {
      setMessages(messagesData?.message);
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100);
    }
  }, [messagesData])



  // scroll to bottom 
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])


  useEffect(() => {
    if (!socket || !chatId) return;
    socket.emit('joinChat', chatId);
    socket.on("NEW_MESSAGES", ({ chatId: incomingChatId, message }) => {
      if (incomingChatId === chatId) {
        console.log("📩 Received socket message:", message);
        const adaptedMessage = {
          ...message, senderId: message.sender
        }
        setMessages(prevMessages => [...prevMessages, adaptedMessage]);
      }
    });
    return () => {
      socket.off("NEW_MESSAGES");
    };
  }, [chatId, socket])

  // const sendMessageHandler = (e: any) => {
  //   e.preventDefault();
  //   if (!message.trim()) return
  //   socket?.emit("NEW_MESSAGES", { chatId: '67ed3658d24ab1bc49bf7c47', members: ["677cc451dbe1b57e24b800d5", "677cc981172a45829c75526a"], message: message })
  //   setMessage("");
  // }


  const sendMessageHandler = (e: any) => {
    e.preventDefault();
    if (!message.trim() || !chatId) return;
    console.log("🟢 Sending NEW_MESSAGES with members:", chatDetails?.chat?.participants?.map((p: any) => p._id));
    socket?.emit("NEW_MESSAGES", {
      chatId: chatId,
      members: chatDetails?.chat?.participants?.map((p: any) => p._id) || [],
      message
    });

    setMessage("");
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100);
  };



  return (
    <Stack ml={["0%", "21%"]} sx={{
      border: 2,
      borderColor: "green",
      height: "", width: ["100%", "50%"], margin: "auto"
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
            width: ["100%", "100%"],
            height: "10%",
            borderBottom: "1px solid #ccc",
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "white"
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
              <Typography variant="body2">
                {chatDetails?.chat?.Name}
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
            height: '100vh',
            overflow: "hidden"
          }}>

            {/* Chat Box */}
            <Box className="Chatbox" sx={{
              flexGrow: 1,
              overflowY: 'auto',
              // maxHeight: ['70vh', '70vh'],
              // height: 'calc(100vh - 200px)',
              padding: '10px'
            }} ref={scrollRef}>
              {messages?.map((item: any, i: any) => (
                <Box
                  key={i}
                  // ref={scrollRef}
                  sx={{
                    display: "flex",
                    justifyContent: item.senderId._id !== user?.user._id ? "flex-start" : "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: item.senderId._id !== user?.user._id ? "#dc3545" : "#f1f1f1",
                      color: item.senderId._id !== user?.user._id ? "white" : "black",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      maxWidth: "60%",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.content}
                  </Box>
                  <Box ref={scrollRef}/>
                </Box>
              ))}
            </Box>
            {/* Input Box */}
            <Box sx={{
              // height: '15%',
              display: 'flex',
              alignItems: 'center',
              borderTop: '2px solid rebeccapurple',
              padding: '10px',
              backgroundColor: "white",
              zIndex: 5,
              marginBottom: '50px'
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
                sx={{ width: '20%', marginLeft: '10px', minWidth: '50px' }}
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