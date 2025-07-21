import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Input } from "@mui/joy";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyChatsAsync, resetUnreadCountAsync } from "../../redux/actions/messageAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IChatDto, updateUnread } from "../../redux/reducers/messageSlice";
import { getSocket } from "../../socket";
import MessageCardSkeleton from '../Loader/MessageCardSkeleton';

const Message = () => {
    const [message, setMessage] = useState('');
    const [sideUser, setSideUser] = useState<IChatDto | null>(null);
    const history = useNavigate();
    const socket = getSocket();
    socket?.on('connect', () => {
        console.log('connected to socket');
    });
    const sendHandler = () => {
        console.log("message send successfully")
    }

    const { mychats, loading } = useAppSelector(x => x.messageSlice);
    const { user } = useAppSelector(x => x.userslice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!socket) return;

        const handler = ({ chatId, count }: any) => {
            if (user?.user?._id) {
                dispatch(updateUnread({ chatId, count, userId: user.user._id }));
            }
        };

        socket.on("UPDATE_UNREAD_COUNT", handler);

        return () => {
            socket.off("UPDATE_UNREAD_COUNT", handler);
        };
    }, [dispatch, socket, user?.user?._id]);


    useEffect(() => {
        // dispatch(getSidebarUserAsync({ args: '' }));
        dispatch(getMyChatsAsync({ args: '' }))
    }, [dispatch])

    useEffect(() => {
        setSideUser(mychats);
    }, [mychats])

    const goToChat = (id: string) => {
        dispatch(resetUnreadCountAsync({ chatId: id }))
        dispatch(updateUnread({ chatId: id, count: 0, userId: user?.user._id }))
        history(`/chat/${id}`);
    }


    return (
        <Stack ml={["0%", "21%"]} sx={{
            // border:1,
            height: "96vh", width: ["100%", "25%"], margin: "auto"
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
                {loading ? (<MessageCardSkeleton />) : (
                    sideUser && sideUser.enhancedChats.length > 0 ? sideUser?.enhancedChats.map((chat) => {
                        const isGroup = chat.groupChat;
                        const participants = chat.participants;
                        const otherUsers = participants.filter(p => p._id !== user?.user?._id);
                        const displayName = isGroup ? chat.Name : otherUsers[0]?.FullName;
                        const displayAvatar = isGroup ? otherUsers[0]?.Avatar.url : otherUsers[0]?.Avatar.url;
                        const userId = user?.user?._id;
                        const unreadCount = userId && chat?.unreadCounts ? chat.unreadCounts[userId] || 0 : 0;

                        return <MessageCard key={chat._id} id={chat._id} image={displayAvatar} Name={displayName}
                            lastMessage={chat?.lastMessage?.content} openChat={() => goToChat(chat._id)} unreadCount={unreadCount} />
                    }) : (
                        <Typography>
                            No User Found
                        </Typography>
                    )
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
    lastMessage: string,
    openChat: () => void,
    unreadCount: number;
}


const MessageCard: FC<MessageCardProp> = ({ image, Name, openChat, lastMessage, unreadCount }) => {
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
                    {lastMessage}
                </Typography>

            </Box>

            <Box sx={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                {unreadCount > 0 ? (
                    <Box
                        sx={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "4px 8px",
                            borderRadius: "50%",
                            fontSize: "0.75rem"
                        }}
                    >
                        {unreadCount}
                    </Box>
                ) : (
                    <LocalSeeOutlinedIcon style={{ fontSize: "2rem" }} />
                )}

            </Box>

        </Box>
    )
}