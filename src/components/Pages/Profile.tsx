import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Box, Button, Modal, Stack, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import proimg from '../../assets/peakpx.jpg';
import { followAndunfollowAsync, getSingleUserAsync } from '../../redux/actions/userAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Homescaleton from '../Loader/Homescaleton';
import { getPostByIdAsync } from '../../redux/actions/postAction';


const Profile = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [followBtn, setFollowBtn] = useState("Follow");
  const [value, setValue] = useState('1');
  const dispatch = useAppDispatch();
  const { singleUser, loading } = useAppSelector(x => x.userslice);
  const { userId } = useParams();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getSingleUserAsync({ userId: userId! }))
  }, [dispatch, userId]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.warn(event)
  };

  const FollowHandler = () => {
    setFollowBtn("Following")
    dispatch(followAndunfollowAsync({ userId: userId! }))
  }

  const OpenPhoto = (id: string) => {
    dispatch(getPostByIdAsync({ postId: id }))
    history('/photos')
  }


  const onClickMailtoHandler = () => {
    window.location.href = 'mailto:max.mustermann@example.com?body=My custom mail body';
  }

  <Button onClick={onClickMailtoHandler}>Send E-Mail</Button>

  return (
    <Stack sx={{
      // border:2,
      height: ["", "96vh"], width: "100%", margin: "auto"
    }}>
      {
        loading === true && (singleUser === null) ? (
          <Homescaleton />
        ) : (singleUser) && (
          <Stack direction={["column", "row"]} sx={{ height: "100%" }}>
            {/*profile start here*/}

            <Box sx={{
              // border:1,
              borderColor: "red",
              height: "100%",
              width: ["100%", "20%"],
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>

              <Box sx={{ display: "flex", width: ["90%", ""] }}>
                <Box onClick={handleOpen} sx={{ width: "25%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                  <Avatar
                    src={singleUser.Avatar.url}
                    sx={{
                      // border: 1,
                      borderColor: "greenyellow",
                      height: 72,
                      width: 72,
                      mt: 2
                    }} />
                </Box>
                <Box sx={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                  <Box >
                    <Link to={'#'} style={{ textDecoration: "none", color: "black" }}>
                      <Typography fontWeight={"600"} sx={{ mt: 1, textAlign: "center" }}>
                        {singleUser.posts.length}
                      </Typography>
                      <Typography fontWeight={"600"} sx={{ mt: 1 }}>
                        Posts
                      </Typography>
                    </Link>
                  </Box>

                  <Box>
                    <Link to={'/userlist'} style={{ textDecoration: "none", color: "black" }}>
                      <Typography fontWeight={"600"} sx={{ mt: 1, textAlign: "center" }}>
                        {singleUser.followers.length}
                      </Typography>
                      <Typography fontWeight={"600"} sx={{ mt: 1 }}>
                        followers
                      </Typography>
                    </Link>
                  </Box>

                  <Box>
                    <Link to={'/userlist'} style={{ textDecoration: "none", color: "black" }}>
                      <Typography fontWeight={"600"} sx={{ mt: 1, textAlign: "center" }}>
                        {singleUser.following.length}
                      </Typography>
                      <Typography fontWeight={"600"} sx={{ mt: 1 }}>
                        following
                      </Typography>
                    </Link>
                  </Box>

                </Box>
              </Box>

              <Box sx={{ width: "85%" }}>
                <Typography variant='h5' sx={{ mt: 1 }}>
                  {singleUser.FullName}
                  <VerifiedRoundedIcon style={{ color: "rgb(50, 193, 250)" }} />
                </Typography>
                <Typography sx={{ mt: 1 }}>{singleUser.userName}</Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>{singleUser.bio}</Typography>






              </Box>

              <Box sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}>

                <Button variant="contained" sx={{
                  backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9',
                  color: followBtn === 'Following' ? '#000' : '#fff'
                }} onClick={FollowHandler}>
                  {followBtn}</Button>

                <Button variant="text" sx={{ color: "black" }}>
                  Message</Button>

                <Button onClick={onClickMailtoHandler} variant="text" sx={{ color: "black" }}>
                  E-mail</Button>

              </Box>

              <Box sx={{
                width: "85%"
              }}>

                {/* <Typography variant="body2" sx={{
                  width: "90%",
                  mt: 2
                }}>

                  Bringing you closer to the people
                  and the ones you love 🧡.
                  Founder of @toddoagency. WATCH
                  @mynameisashley ON PRIME VIDEO 🎦
                  www.ashleytodd.com
                </Typography> */}

                <Typography sx={{ mt: 1 }}>
                  Followers instagram, armanihotel, omega
                  other 351 ones   <MoreHorizRoundedIcon />
                </Typography>

              </Box>

            </Box>


            <Box sx={{
              // border:1,
              borderColor: "black",
              height: "100%",
              width: ["100%", "80%"]
            }}>

              <Box sx={{
                // border:1,
                borderColor: "blueviolet",
                width: "100%", height: "13%",
                display: "flex",
                alignContent: "center",
                mt: 1,
                justifyContent: "space-evenly",
                overflow: "scroll"
              }}>


                <Avatar
                  src={proimg}
                  sx={{
                    border: 1,
                    borderColor: "greenyellow",
                    height: 72,
                    width: 72
                  }} />

                <Avatar
                  src={proimg}
                  sx={{
                    border: 1,
                    borderColor: "greenyellow",
                    height: 72,
                    width: 72,
                  }} />
                <Avatar
                  src={proimg}
                  sx={{
                    border: 1,
                    borderColor: "greenyellow",
                    height: 72,
                    width: 72,
                  }} />
                <Avatar
                  src={proimg}
                  sx={{
                    border: 1,
                    borderColor: "greenyellow",
                    height: 72,
                    width: 72,
                  }} />



              </Box>


              <Box sx={{ width: '100%', typography: 'body1' }}>

                <TabContext value={value}>
                  <Box sx={{
                    // borderBottom: 1,
                    // borderColor: "crimson",
                    width: ["100%", "60%"],
                    // height:"10%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                    // p:1
                  }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                      sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Tab value="1" sx={{ width: "33.3%" }} label={
                        <Box>
                          <GridOnRoundedIcon style={{ fontSize: "2.5rem" }} />
                          <Typography sx={{ ml: 1, display: ["none", "block"] }}>
                            POSTS
                          </Typography>
                        </Box>
                      } />



                      <Tab value="2" sx={{ width: "33.3%" }} label={
                        <Box>
                          <LiveTvRoundedIcon style={{ fontSize: "2.5rem" }} />
                          <Typography sx={{ ml: 1, display: ["none", "block"] }}>
                            IGTV
                          </Typography>
                        </Box>
                      } />


                      <Tab value="3" sx={{ width: "33.3%" }} label={
                        <Box>
                          <SwitchAccountOutlinedIcon style={{ fontSize: "2.5rem" }} />
                          <Typography sx={{ ml: 1, display: ["none", "block"] }}>
                            TAGGED IN
                          </Typography>
                        </Box>
                      }
                      />



                    </TabList>
                  </Box>
                  <TabPanel value="1" sx={{ borderColor: "greenyellow", padding: 0 }}>
                    <Box sx={{
                      //  border:2,
                      // borderColor: "brown",
                      height: ["", "77%"],
                      display: "flex",
                      justifyContent: "start",
                      flexWrap: "wrap",
                      width: "100%",
                      mt: 1,
                      gap: 0.1,
                      boxSizing: "border-box"
                    }}>

                      {
                        singleUser && singleUser.posts.length > 0 ? (

                          singleUser.posts.map((item) => (
                            <Box sx={{
                              width: "33%",
                              height: 110,
                              backgroundColor: 'crimson',
                              '&:hover': {
                                backgroundColor: 'primary',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }} key={item._id} onClick={() => OpenPhoto(item._id)}>
                              <img src={item.image.url} style={{ height: "100%", width: "100%" }} />
                            </Box>
                          ))
                        ) : (
                          <Typography>
                            No Post Available
                          </Typography>
                        )
                      }



                    </Box>
                  </TabPanel>

                  <TabPanel value="2" sx={{ borderColor: "greenyellow", padding: 0 }}>
                    <Box sx={{
                      //  border:2,
                      borderColor: "brown",
                      height: ["", "77%"],
                      display: "flex",
                      justifyContent: "start",
                      flexWrap: "wrap",
                      width: "100%",
                      mt: 1,
                      gap: 0.1
                    }}>



                      {
                        singleUser && singleUser.posts.length > 0 ? (

                          singleUser.posts.map((item) => (
                            <Box sx={{
                              width: "33%",
                              height: 110,
                              backgroundColor: 'green',
                              '&:hover': {
                                backgroundColor: 'primary',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }} key={item._id} onClick={() => OpenPhoto(item._id)}>
                                <img src={item.image.url} style={{ height: "100%", width: "100%" }} />
                            </Box>
                          ))
                        ) : (
                          <Typography>
                            No Post Available
                          </Typography>
                        )
                      }


                    </Box>
                  </TabPanel>


                  <TabPanel value="3" sx={{ borderColor: "greenyellow", padding: 0 }}>
                    <Box sx={{
                      //  border:2,
                      borderColor: "brown",
                      height: ["", "77%"],
                      display: "flex",
                      justifyContent: "start",
                      flexWrap: "wrap",
                      width: "100%",
                      mt: 1,
                      gap: 0.1
                    }}>

                      {
                        singleUser && singleUser.posts.length > 0 ? (

                          singleUser.posts.map((item) => (
                            <Box sx={{
                              width: "33%",
                              height: 110,
                              backgroundColor: 'greenyellow',
                              '&:hover': {
                                backgroundColor: 'primary',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }} key={item._id} onClick={() => OpenPhoto(item._id)}>
                                <img src={item.image.url} style={{ height: "100%", width: "100%" }} />
                            </Box>
                          ))
                        ) : (
                          <Typography>
                            No Post Available
                          </Typography>
                        )
                      }




                    </Box>
                  </TabPanel>
                </TabContext>
              </Box>


            </Box>



            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box>
                    <img src={singleUser.Avatar.url} alt="Profile" style={{
                      width: '350px',
                      height: '350px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }} />
                  </Box>
                </Box>
              </Modal>
            </div>
          </Stack>
        )
      }


    </Stack>
  )
}

export default Profile