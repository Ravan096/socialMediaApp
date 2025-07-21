import { Global } from '@emotion/react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Avatar, Box, Button, Divider, Drawer, Stack, SwipeableDrawer, Typography } from "@mui/material";
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img24 from '../../assets/2.jpg.webp';
import img25 from '../../assets/5.jpg.webp';
import img26 from '../../assets/bg_1.jpg.webp';
import img22 from '../../assets/model_img_3-500x625.jpg';
import proimg from '../../assets/peakpx.jpg';
// import Comment from '../Comment/Comment';
import moment from 'moment';
import { getPostOfFollwoing, likePostAsync, savePostAsync } from '../../redux/actions/postAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Post } from '../../redux/reducers/postSlice';
import HomeCardSkeleton from '../Loader/HomeCardSkeleton';





const Home = () => {

  const [followBtn, setFollowBtn] = useState("Follow");
  const [Posts, setPosts] = useState<Post[]>([]);
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector(x => x.postSlice);

  const FollowHandler = () => {
    setFollowBtn("Following")
  }

  useEffect(() => {
    dispatch(getPostOfFollwoing({ args: "" }));
  }, [dispatch])


  useEffect(() => {
    setPosts(posts)
  }, [posts])

  const savePost = (id: string) => {
    setPosts(prevPosts =>
      prevPosts.map((post: Post) =>
        post._id === id ? { ...post, isSave: !post.isSave } : post
      )
    );
    dispatch(savePostAsync({ postId: id }))
  }


  const likePost = (id: string) => {

    setPosts(prevPosts =>
      prevPosts.map((post: Post) =>
        post._id === id ? { ...post, isLike: !post.isLike } : post
      )
    );
    dispatch(likePostAsync({ postId: id }))
  }




  return (
    <Stack width={["100%", "60%"]} ml={["0%", "21%"]} >
      <Box width={["100%", "50%"]} display={"flex"} alignItems={"center"} justifyContent={["space-between", "Start"]} gap={[0, 20]} sx={{ boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.05)' }}>

        <Box sx={{
          width: "20%",
          textAlign: "center",
          // border:1,
          display: "flex",
          alignContent: "center",
          justifyContent: 'space-evenly'
        }}>

          <InstagramIcon style={{ fontSize: "2rem" }} />
          <Typography variant='h4' display={["none", "block"]} fontFamily={"cursive"}>
            Instagram
          </Typography>
        </Box>

        <Box width={"40%"} display={"flex"} justifyContent={["space-around", "start"]} gap={[0, 5]}>
          <Link to={"/like"}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: "2rem", color: "black" }} />
          </Link>
          <Link to={"/message"}>
            <TelegramIcon style={{ fontSize: "2rem", color: "black" }} />
          </Link>
        </Box>
      </Box>

      <Box display={"flex"} alignItems={"center"} justifyContent={["space-evenly", "start"]} mt={.5} gap={[0, 5]}>
        <Avatar
          src={proimg}
          sx={{
            border: 1,
            borderColor: "greenyellow",
            height: 70,
            width: 70
          }} />

        <Avatar
          src={img22}
          sx={{
            border: 1,
            borderColor: "greenyellow",
            height: 70,
            width: 70,
          }} />
        <Avatar
          src={img24}
          sx={{
            border: 1,
            borderColor: "greenyellow",
            height: 70,
            width: 70,
          }} />
        <Avatar
          src={img25}
          sx={{
            border: 1,
            borderColor: "greenyellow",
            height: 70,
            width: 70,
          }} />
        <Avatar
          src={img26}
          sx={{
            border: 1,
            borderColor: "greenyellow",
            height: 70,
            width: 70,
          }} />


      </Box>


      <Stack sx={{
        // border:1,
        height: "96vh", width: "80%", margin: ["auto", 0]
      }}>





        <Stack direction={["column", 'row']}
          sx={{
            // border:1,
            width: "100%",
            mt: [1.5, 0]
          }}>

          {/* home content start */}
          <Box sx={{
            // border:1,
            width: ["100%", "60%"],
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>

            {
              loading ? (<HomeCardSkeleton />) : (
                Posts.length > 0 ? (
                  Posts.map((item: any) => (
                    <HomeCard key={item._id} image={item.image.url} Caption={`${item.title} ${item.content}`} CreatedAt={item.CreatedAt}
                      savePostHandle={(id) => savePost(id)} id={item?._id} likePostHandle={(id) => likePost(id)} postOwnerId={item.userId._id}
                      postOwner={item.userId.FullName} postLocation={item.Location} liked={item.isLike} save={item.isSave} />
                  ))
                ) :
                  (
                    <Typography>
                      No Post Available
                    </Typography>
                  )
              )
            }

            {/* <HomeCard image={img1} />
            <HomeCard image={img2} />
            <HomeCard image={img3} />
            <HomeCard image={img4} />
            <HomeCard image={img5} />
            <HomeCard image={img6} />
            <HomeCard image={img7} />
            <HomeCard image={img8} />
            <HomeCard image={img9} />
            <HomeCard image={img10} />
            <HomeCard image={img11} />
            <HomeCard image={img12} />
            <HomeCard image={img13} />
            <HomeCard image={img14} />
            <HomeCard image={img15} />
            <HomeCard image={img16} />
            <HomeCard image={img17} />
            <HomeCard image={img18} />
            <HomeCard image={img19} />
            <HomeCard image={img20} />
            <HomeCard image={img21} />
            <HomeCard image={img22} />
            <HomeCard image={img23} />
            <HomeCard image={img24} />
            <HomeCard image={img25} />
            <HomeCard image={img26} />
            <HomeCard image={img27} />
            <HomeCard image={img28} />
            <HomeCard image={img29} />
            <HomeCard image={img30} />
            <HomeCard image={img31} />
            <HomeCard image={img32} />
            <HomeCard image={img33} />
            <HomeCard image={img34} /> */}
          </Box>
          {/* home content end */}







          {/* home sidebar start */}
          <Box sx={{
            // border:1,
            borderColor: "red",
            width: "40%",
            display: ["none", "none"],
            boxShadow: 3
          }}>

            <Box sx={{
              // border:1,
              display: "flex"
            }}>
              <Avatar
                src={proimg}
                sx={{
                  //  border:1,
                  borderColor: "greenyellow",
                  height: 48,
                  width: 48,
                }} />
              <Box>
                <Typography>
                  _nae11
                </Typography>
                <Typography>
                  Instagram HQ
                </Typography>
              </Box>

            </Box>


            <Box sx={{
              //  border:1,
              mt: 2
            }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography>
                  Stories
                </Typography>
                <Typography>
                  Watch All
                </Typography>
              </Box>

              <Box sx={{ display: "flex", mt: 1 }}>
                <Avatar
                  src={proimg}
                  sx={{
                    //  border:1,
                    borderColor: "greenyellow",
                    height: 48,
                    width: 48,
                  }} />
                <Box>
                  <Typography>
                    _nae11
                  </Typography>
                  <Typography>
                    Instagram HQ
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Avatar
                  src={proimg}
                  sx={{
                    //  border:1,
                    borderColor: "greenyellow",
                    height: 48,
                    width: 48,
                  }} />
                <Box>
                  <Typography>
                    _nae11
                  </Typography>
                  <Typography>
                    Instagram HQ
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Avatar
                  src={proimg}
                  sx={{
                    //  border:1,
                    borderColor: "greenyellow",
                    height: 48,
                    width: 48,
                  }} />
                <Box>
                  <Typography>
                    _nae11
                  </Typography>
                  <Typography>
                    Instagram HQ
                  </Typography>
                </Box>
              </Box>



            </Box>







            <Box sx={{
              // border:1,
              mt: 2
            }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography>
                  Suggested for you
                </Typography>
                <Typography>
                  See All
                </Typography>
              </Box>

              <Box sx={{ display: "flex", mt: 1 }}>
                <Avatar
                  src={proimg}
                  sx={{
                    //  border:1,
                    borderColor: "greenyellow",
                    height: 48,
                    width: 48,
                  }} />
                <Box>
                  <Typography>
                    _nae11
                  </Typography>
                  <Typography>
                    Instagram HQ
                  </Typography>
                </Box>
                <Button variant="contained"
                  sx={{
                    backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9',
                    color: followBtn === 'Following' ? '#000' : '#fff', height: 1
                  }} onClick={FollowHandler}>{followBtn}</Button>
              </Box>
              <Box sx={{ mt: 1, display: "flex" }}>
                <Avatar
                  src={proimg}
                  sx={{
                    //  border:1,
                    borderColor: "greenyellow",
                    height: 48,
                    width: 48,
                  }} />
                <Box>
                  <Typography>
                    _nae11
                  </Typography>
                  <Typography>
                    Instagram HQ
                  </Typography>
                </Box>
                <Button variant="text" sx={{
                  backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9',
                  color: followBtn === 'Following' ? '#000' : '#fff', height: 1
                }} onClick={FollowHandler}>{followBtn}</Button>
              </Box>
              <Box sx={{ mt: 1, display: "flex" }}>
                <Avatar
                  src={proimg}
                  sx={{
                    //  border:1,
                    borderColor: "greenyellow",
                    height: 48,
                    width: 48,
                  }} />
                <Box>
                  <Typography>
                    _nae11
                  </Typography>
                  <Typography>
                    Instagram HQ
                  </Typography>
                </Box>
                <Button variant="text" sx={{
                  backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9',
                  color: followBtn === 'Following' ? '#000' : '#fff', height: 1
                }} onClick={FollowHandler}>{followBtn}</Button>
              </Box>



            </Box>








          </Box>

          {/* home sidebar end */}



        </Stack>



      </Stack>
    </Stack>
  )
}

type HomeCardProp = {
  id: string
  image: string,
  Caption: string,
  CreatedAt: string,
  savePostHandle: (id: string) => void
  likePostHandle: (id: string) => void
  postOwner: string
  postLocation: string
  liked: boolean
  save: boolean
  postOwnerId: string
}

const HomeCard: FC<HomeCardProp> = ({ image, Caption, CreatedAt, id, savePostHandle, likePostHandle, postOwner, postLocation, liked, save, postOwnerId }) => {

  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState([]);

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
      <Box sx={{
        // border:1,
        display: "flex",
        alignItems: "center",
      }}>
        <Link to={`/profile/${postOwnerId}`}>
          <Avatar
            src={proimg}
            sx={{
              //  border:1,
              borderColor: "greenyellow",
              height: 62,
              width: 62,
              ml: 2
            }} />
        </Link>
        <Box sx={{ ml: 2 }}>
          <Link to={`/profile/${postOwnerId}`}>
            <Typography color={"black"} sx={{ textDecorationLine: "none" }}>
              {postOwner}
            </Typography>
          </Link>
          <Typography>
            {postLocation}
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
          <img src={image} alt="test" style={{ objectFit: 'contain', height: "100%", width: "100%" }} />
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
          {/* <FavoriteIcon onClick={handleClick}  style={{fontSize:"2.5rem",marginLeft:"2%",color: liked ? 'crimson' : 'black'}}/> */}
          {liked ? <FavoriteIcon onClick={() => likePostHandle(id)} style={{ fontSize: "2.5rem", marginLeft: "2%", color: 'crimson' }} /> :
            <FavoriteBorderOutlinedIcon onClick={() => likePostHandle(id)} style={{ fontSize: "2.5rem", marginLeft: "2%" }} />}

          {/* <ModeCommentOutlinedIcon onClick={handleShowComments} style={{fontSize:"2.5rem",marginLeft:"2%",}}/> */}
          <ModeCommentOutlinedIcon onClick={handleClick} style={{ fontSize: "2.5rem", marginLeft: "2%", }} />

        </Box>
        <Box sx={{
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}>
          {save ? <BookmarkRoundedIcon onClick={() => savePostHandle(id)} style={{ fontSize: "2.5rem", marginRight: "3%" }} /> :
            <BookmarkBorderOutlinedIcon onClick={() => savePostHandle(id)} style={{ fontSize: "2.5rem", marginRight: "3%" }} />}
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
                            src={proimg}
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
                          {liked ? <FavoriteIcon onClick={() => likePostHandle} style={{ fontSize: "1rem", color: 'crimson' }} /> :
                            <FavoriteBorderOutlinedIcon onClick={() => likePostHandle} style={{ fontSize: "1rem", }} />}
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
          {Caption}
        </Typography>

        <Typography onClick={handleShowComments} variant={"subtitle2"} gutterBottom sx={{ ml: 1.1 }}>
          view all 18 comments
        </Typography>

        <Typography variant={"subtitle2"} gutterBottom sx={{ ml: 1.1 }}>
          ewthatsgross great colos!
        </Typography>
        <Typography sx={{ ml: 1.1 }}>
          { } {moment(CreatedAt).fromNow()}
        </Typography>
        <MoreHorizRoundedIcon style={{ marginLeft: "2%" }} />

      </Box>



    </Box>
  )
}

export default Home


