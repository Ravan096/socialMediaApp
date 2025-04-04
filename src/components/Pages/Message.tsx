import { Avatar, Box, Stack, Typography } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/joy";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSidebarUserAsync } from "../../redux/actions/messageAction";
import { SideUser } from "../../redux/reducers/messageSlice";
import { getSocket } from "../../socket";

const Message = () => {
    const [message, setMessage] = useState('');
    const [sideUser, setSideUser] = useState<SideUser[]>([]);
    const history = useNavigate();
    const socket = getSocket();
    socket?.on('connect', () => {
        console.log('connected to socket');
    });
    const sendHandler = () => {
        console.log("message send successfully")
    }

    const { sideBarUser } = useAppSelector(x => x.messageSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSidebarUserAsync({ args: '' }));
    }, [dispatch])
    useEffect(() => {
        setSideUser(sideBarUser);
    }, [sideBarUser])

    const goToChat = (id: string) => {
        history(`/chat/${id}`);
    }


    return (
        <Stack sx={{
            // border:1,
            height: "96vh", width: ["100%", "80%"], margin: "auto"
        }}>

            <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ display: "flex", width: "30%", alignItems: "center", justifyContent: "space-around" }}>
                    <Link to={"/home"}><KeyboardBackspaceOutlinedIcon style={{ fontSize: "2rem", color: "black " }} /></Link>
                    <Typography fontSize={"1.4rem"} fontWeight={"bold"}>
                        Chats
                    </Typography>
                </Box>

                <Box sx={{ width: "70%", display: "flex", justifyContent: "flex-end" }}>
                    <Box sx={{ display: "flex", width: "50%", justifyContent: "space-around" }}>
                        <VideocamOutlinedIcon style={{ fontSize: "2rem" }} />
                        <EditNoteOutlinedIcon style={{ fontSize: "2rem" }} />
                    </Box>

                </Box>

            </Box>

            <Box display={"flex"} alignItems={"center"} >
                <SearchIcon style={{ fontSize: "2.5rem", marginTop: 5 }} />
                <Input variant="outlined"
                    placeholder="Search..."
                    sx={{ mt: 2, width: 1, mb: 1, mr: 1 }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" ? sendHandler() : null} />
            </Box>


            <Box overflow={"auto"}>
                {
                    sideUser && sideUser.length > 0 ? sideUser.map((user) => {
                        return <MessageCard key={user._id} id={user._id} image={user.Avatar.url} Name={`${user.FullName}`} openChat={() => goToChat(user._id)} />
                    }) : (
                        <Typography>
                            No User Found
                        </Typography>
                    )
                }

            </Box>
        </Stack>
    )
}

export default Message


type MessageCardProp = {
    id: string
    image: string,
    Name: string,
    openChat: () => void
}


const MessageCard: FC<MessageCardProp> = ({ image, Name, openChat }) => {
    return (
        <Box display={"flex"} mt={1} onClick={openChat} sx={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <Box sx={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Avatar sx={{ bgcolor: deepPurple[500] }} src={image}>{Name}</Avatar>

            </Box>

            <Box sx={{ width: "60%" }}>
                <Typography fontWeight={"bold"} ml={1}>
                    {Name}
                </Typography>
                <Typography ml={1}>
                    hi
                </Typography>

            </Box>

            <Box sx={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <LocalSeeOutlinedIcon style={{ fontSize: "2rem" }} />
            </Box>

        </Box>
    )
}