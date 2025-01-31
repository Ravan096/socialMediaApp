import { Global } from "@emotion/react";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Avatar, Box, Divider, Drawer, SwipeableDrawer, Typography } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Homescaleton from "../Loader/Homescaleton";
import { likePostAsync, savePostAsync } from "../../redux/actions/postAction";


const Photos = () => {

    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState([]);
    const dispatch = useAppDispatch();
    const { loading, singlePost } = useAppSelector(x => x.postSlice)

    const url = "https://jsonplaceholder.typicode.com/comments?_limit=20";
    // const url = "https://api.publicapis.org/entries";

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setComment(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchComments();
    }, [url]);

    const likePostHandle = (id: string) => {
        dispatch(likePostAsync({postId:id}))
        
    }
    const savePostHandle = (id: string) => {
        dispatch(savePostAsync({postId:id}))
    }




    const handleShowComments = () => {
        setShowComments(!showComments);
    };


    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setShowComments(!showComments);
        setOpen(!open);
    };

    const drawerBleeding = 56;
    return (
        <Box sx={{
            // border:1, 
            // height:"60vh", 
            width: ["100vw", "100%"]
        }}>
            {
                loading ? (
                    <Homescaleton />
                ) : (
                    <>
                        <Box sx={{
                            // border:1,
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <Link to={"/profile"}>
                                <Avatar
                                    src={singlePost?.userId.Avatar.url}
                                    sx={{
                                        //  border:1,
                                        borderColor: "greenyellow",
                                        height: 62,
                                        width: 62,
                                        ml: 2
                                    }} />
                            </Link>
                            <Box sx={{ ml: 2 }}>
                                <Link to={`/profile/${"postOwnerId"}`}>
                                    <Typography color={"black"} sx={{ textDecorationLine: "none" }}>
                                        {singlePost?.userId.FullName}
                                    </Typography>
                                </Link>
                                <Typography>
                                    {singlePost?.Location}
                                </Typography>
                            </Box>

                        </Box>




                        <Box sx={{
                            // border:1,
                            display: "flex",
                            justifyContent: "center", mt: 1
                        }}>
                            <Box sx={{
                                width: 350,
                                height: 350,
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: 'primary',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                                <img src={singlePost?.image.url} alt="test" style={{ objectFit: 'contain', height: "100%", width: "100%" }} />
                            </Box>

                        </Box>




                        <Box sx={{
                            mt: 1,
                            // border:1,
                            display: "flex", justifyContent: "space-around"
                        }}>
                            <Box sx={{
                                width: "25%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                            }}>
                                {/* <FavoriteIcon onClick={handleClick}  style={{fontSize:"2.5rem",marginLeft:"2%",color: singlePost?.isLike ? 'crimson' : 'black'}}/> */}
                                {singlePost?.isLike ? <FavoriteIcon onClick={() => likePostHandle(singlePost._id)} style={{ fontSize: "2.5rem", marginLeft: "2%", color: 'crimson' }} /> :
                                    <FavoriteBorderOutlinedIcon onClick={() => likePostHandle(singlePost?._id!)} style={{ fontSize: "2.5rem", marginLeft: "2%" }} />}

                                {/* <ModeCommentOutlinedIcon onClick={handleShowComments} style={{fontSize:"2.5rem",marginLeft:"2%",}}/> */}
                                <ModeCommentOutlinedIcon onClick={handleClick} style={{ fontSize: "2.5rem", marginLeft: "2%", }} />

                            </Box>
                            <Box sx={{
                                width: "75%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}>
                                {singlePost?.isSave ? <BookmarkRoundedIcon onClick={() => savePostHandle(singlePost._id)} style={{ fontSize: "2.5rem", marginRight: "3%" }} /> :
                                    <BookmarkBorderOutlinedIcon onClick={() => savePostHandle(singlePost?._id!)} style={{ fontSize: "2.5rem", marginRight: "3%" }} />}
                            </Box>


                        </Box>

                        {/* comments  */}
                        <Box sx={{ width: "100%" }}>
                            {
                                showComments ?
                                    // <Box>        
                                    <Drawer anchor="bottom" open={open} onClose={handleClick}>
                                        {/* {renderDrawer()} */}
                                        <Box>
                                            <Global
                                                styles={{
                                                    '.MuiDrawer-root > .MuiPaper-root': {
                                                        height: `calc(60% - ${drawerBleeding}px)`,
                                                        overflow: 'auto',
                                                    },
                                                }}
                                            />
                                            <SwipeableDrawer
                                                anchor="bottom"
                                                open={open}
                                                onClose={handleClick}
                                                onOpen={handleClick}
                                                swipeAreaWidth={drawerBleeding}
                                                disableSwipeToOpen={false}
                                                ModalProps={{
                                                    keepMounted: true,
                                                }}
                                            >
                                                <Typography sx={{ alignSelf: "center", fontWeight: "bold" }}>{comment.length} Result</Typography>
                                                <Divider sx={
                                                    {
                                                        width: "50%",
                                                        alignSelf: "center",
                                                        fontSize: "2vh",
                                                        fontWeight: "bold"
                                                    }
                                                } />
                                                {
                                                    comment.map((i: any) => (
                                                        <Box sx={{ borderColor: "black", display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }} key={i.id} boxSizing={"border-box"}>

                                                            <Box sx={{ width: "90%", display: "flex" }}>
                                                                <Avatar
                                                                    src={"proimg"}
                                                                    sx={{
                                                                        //  border:1,
                                                                        borderColor: "greenyellow",
                                                                        height: [30, 52],
                                                                        width: [30, 52],
                                                                        mr: 1,
                                                                        ml: 0.5,
                                                                        mt: 0.5
                                                                    }} />
                                                                {/* <Box sx={{border:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}> */}
                                                                <Typography sx={{ fontWeight: 800, padding: 1 }} variant="subtitle2">{"i.name"}
                                                                    <Typography variant="caption" sx={{ ml: 0.5 }}>{"i.body i like your body lorem index cam chat message home contact i like your body lorem index cam chat message home contact "}</Typography>
                                                                </Typography>
                                                                {/* <Typography variant="caption" sx={{ml:2}}>{"i.body i like your body lorem index cam chat message home contact"}</Typography> */}
                                                                {/* </Box> */}
                                                            </Box>


                                                            <Box sx={{ width: "10%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                {/* {liked ? <FavoriteIcon onClick={() => likePostHandle} style={{ fontSize: "1rem", color: 'crimson' }} /> :
                                                        <FavoriteBorderOutlinedIcon onClick={() => likePostHandle} style={{ fontSize: "1rem", }} />} */}
                                                            </Box>



                                                        </Box>
                                                    ))
                                                }
                                            </SwipeableDrawer>
                                        </Box>
                                    </Drawer>
                                    // </Box>


                                    : ""
                            }
                        </Box>



                        <Box sx={{
                            // border:1,
                            borderColor: 'red',
                        }}>
                            <Typography variant={"subtitle2"} gutterBottom sx={{ ml: 1.1 }}>
                                like by ewthatsgross and 475 others
                            </Typography>

                            <Typography variant={"subtitle2"} gutterBottom sx={{ ml: 1.1 }}>
                                {singlePost?.title}
                                {singlePost?.content}
                            </Typography>

                            <Typography onClick={handleShowComments} variant={"subtitle2"} gutterBottom sx={{ ml: 1.1 }}>
                                view all 18 comments
                            </Typography>

                            <Typography variant={"subtitle2"} gutterBottom sx={{ ml: 1.1 }}>
                                ewthatsgross great colos!
                            </Typography>
                            <Typography sx={{ ml: 1.1 }}>
                                { } {moment(singlePost?.CreatedAt).fromNow()}
                            </Typography>
                            <MoreHorizRoundedIcon style={{ marginLeft: "2%" }} />

                        </Box>
                    </>
                )
            }


        </Box>
    )
}

export default Photos