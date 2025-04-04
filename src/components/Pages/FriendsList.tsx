import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/joy';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Avatar, Box, Button, Stack, Tab, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFollowingFollowersAsync } from '../../redux/actions/userAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const FriendsList = () => {
    const [message, setMessage] = useState<string>();
    const [value, setValue] = useState<string>('1');
    const { loading, FollowerFollowing } = useAppSelector(x => x.userslice)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.warn(event)
    }

   


    const sendHandler = () => {
        console.log("send handler is working");
    }


    useEffect(() => {
        dispatch(getFollowingFollowersAsync({ userId: "677cc451dbe1b57e24b800d5" }))
    }, []);





    return (
        <Stack sx={{ borderColor: "green" }}>
            {
                loading ? (
                    <Typography>
                        Loading
                    </Typography>
                ) : (
                    <>
                        <Box sx={{ borderColor: "red" }} width={"100%"}>
                            <Box sx={{ width: "40%" }} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                                <KeyboardBackspaceIcon fontSize='large' onClick={() => navigate(-1)} />
                                <Typography fontSize={"large"} fontWeight={"bold"}>
                                    {FollowerFollowing?.userName}
                                </Typography>
                            </Box>
                        </Box>

                        <Box>

                            <TabContext value={value}>
                                <Box sx={{
                                    // borderBottom: 1,
                                    borderColor: "crimson",
                                    width: ["100%", "60%"],
                                    // height: "10%",
                                    display: "flex",
                                    // justifyContent: "space-around",
                                    alignItems: "center",
                                    // p:1
                                }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                                        variant='scrollable'
                                        sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Tab value="1" label={
                                            <Box>
                                                <Typography sx={{ ml: 1 }}>
                                                    Mutual
                                                </Typography>
                                            </Box>
                                        } />



                                        <Tab value="2" label={
                                            <Box>
                                                <Typography sx={{ ml: 1 }}>
                                                    Followers
                                                </Typography>
                                            </Box>
                                        } />


                                        <Tab value="3" label={
                                            <Box>
                                                <Typography sx={{ ml: 1 }}>
                                                    Following
                                                </Typography>
                                            </Box>
                                        }
                                        />
                                        <Tab value="4" label={
                                            <Box>
                                                <Typography sx={{ ml: 1 }} >
                                                    Suggested
                                                </Typography>
                                            </Box>
                                        }
                                        />



                                    </TabList>
                                </Box>
                                <Box sx={{ borderColor: "red" }} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                    <SearchIcon />
                                    <Input variant="outlined"
                                        placeholder="Search..."
                                        sx={{ mt: 2, width: 1, mb: 1, mr: 1 }}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" ? sendHandler() : null} />
                                </Box>
                                <TabPanel value="1" sx={{ borderColor: "greenyellow", padding: 0 }}>
                                    <Box sx={{
                                        //  border:2,
                                        // borderColor: "brown",
                                        // height: ["", "77%"],
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        mt: 1,
                                        gap: 0.5,
                                        boxSizing: "border-box"
                                    }}>
                                        {
                                            FollowerFollowing?.followers.map((item) => (
                                                <UserListCard name={item.FullName} url={item.Avatar.url} username={item.userName!} key={item._id} userId={item._id} />
                                            ))
                                        }

                                    </Box>
                                </TabPanel>

                                <TabPanel value="2" sx={{ borderColor: "greenyellow", padding: 0 }}>
                                    <Box sx={{
                                        //  border:2,
                                        borderColor: "brown",
                                        height: ["", "77%"],
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        mt: 1,
                                        gap: 0.5
                                    }}>
                                        {
                                            FollowerFollowing?.followers.map((item) => (
                                                <UserListCard name={item.FullName} url={item.Avatar.url} username={item.userName!} key={item._id} userId={item._id} />
                                            ))
                                        }
                                    </Box>
                                </TabPanel>


                                <TabPanel value="3" sx={{ borderColor: "greenyellow", padding: 0 }}>
                                    <Box sx={{
                                        //  border:2,
                                        borderColor: "brown",
                                        height: ["", "77%"],
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        mt: 1,
                                        gap: 0.5,
                                        // overflowY: "auto",
                                        // scrollbarWidth: "thin", 
                                        // "&::-webkit-scrollbar": {
                                        //     width: "6px", 
                                        // },
                                        // "&::-webkit-scrollbar-thumb": {
                                        //     backgroundColor: "rgba(0,0,0,0.3)",
                                        //     borderRadius: "10px",
                                        // }
                                    }}>
                                        {
                                            FollowerFollowing?.followings.map((item) => (
                                                <UserListCard name={item.FullName} url={item.Avatar.url} username={item.userName!} key={item._id} userId={item._id} />
                                            ))
                                        }

                                    </Box>
                                </TabPanel>

                                <TabPanel value="4" sx={{ borderColor: "greenyellow", padding: 0 }}>
                                    <Box sx={{
                                        //  border:2,
                                        borderColor: "brown",
                                        height: ["", "77%"],
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        mt: 1,
                                        gap: 0.1
                                    }}>
                                        <Typography>
                                            Suggested
                                        </Typography>

                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </>
                )
            }


        </Stack>
    )
}

export default FriendsList


export interface UserListDto {
    url: string
    name: string
    username: string
    userId: string
}
const UserListCard: FC<UserListDto> = ({ name, url, username, userId }) => {
    const [followBtn, setFollowBtn] = useState("Follow");
    const FollowHandler = () => {
        setFollowBtn("Following")
    }
    return (
        <Box sx={{ width: "98%", boxShadow: 1, bgcolor: "background.paper", borderRadius: 2, padding: 0.5 }} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Box sx={{ width: "20%" }}>
                <Link to={`/profile/${userId}`} style={{ textDecoration: "none", color: "black" }}>
                    <Avatar
                        src={url}
                        sx={{
                            // border: 1,
                            borderColor: "greenyellow",
                            height: 52,
                            width: 52,
                            // mt: 2
                        }} />
                </Link>
            </Box>
            <Box sx={{ width: "40%" }}>
                <Link to={`/profile/${userId}`} style={{ textDecoration: "none", color: "black" }}>
                    <Typography fontWeight={"bold"}>
                        {name}
                    </Typography>
                    <Typography fontSize={"body2"}>
                        {username}
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ width: "40%", textAlign: "center" }}>
                <Button variant="contained" sx={{
                    backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9',
                    color: followBtn === 'Following' ? '#000' : '#fff'
                }} onClick={FollowHandler}>
                    {followBtn}
                </Button>
            </Box>
        </Box>
    )
}

export { UserListCard };

