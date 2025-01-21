import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MenuIcon from '@mui/icons-material/Menu';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import proimg from '../../assets/peakpx.jpg';
import { meAsync } from '../../redux/actions/userAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Userprofile = () => {
  const [value, setValue] = useState('1');

  const { user } = useAppSelector(x => x.userslice)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(meAsync({ args: '' }))
  }, [dispatch])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.warn(event)
  };
  return (
    <Stack sx={{
      // border:2,
      height: ["", "96vh"], width: "100%", margin: "auto"
    }}>


      {/*profile start here*/}

      <Box sx={{
        // border:1,
        borderColor: "red",
        height: ["", "30%"],
        width: "100%",
        display: "flex",
        flexDirection: ["column", "column"],
        // mt:6,
        // flexDirection:"column",
        alignItems: ["flex-start", "flex-start"]
      }}>

        <Box sx={{
          // border: 1,
          borderColor: "limegreen",
          width: ["100%", "30%"],
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>

          <Box sx={{
            display: "flex",
            width: "100%",
            // alignItems: "start",
            // mt: 1,
            justifyContent: "space-between"
          }}>

            <Typography fontWeight={"600"} sx={{ mt: 1 }}>
              {user?.userName}
            </Typography>

            <Box
              sx={{
                // border:1,
                borderColor: "black",
                display: "flex",
                gap: 2
              }}>
              <AddCircleOutlineIcon />
              <Link to={'/settingsandactivity'}>
                <MenuIcon /></Link>
            </Box>


          </Box>


        </Box>

        <Box sx={{
          // border:1, 
          borderColor: "limegreen",
          width: ["100%", "30%"],
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}>

          <Avatar
            src={user?.Avatar.url}
            sx={{
              //  border:1,
              borderColor: "greenyellow",
              height: 72,
              width: 72,
              mt: 1
            }} />

          <Box sx={{
            display: "flex",
            width: "70%",
            alignItems: "center",
            mt: 1,
            justifyContent: "space-between"
          }}>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography fontWeight={"600"} sx={{ mt: 1 }}>
                {user?.posts.length}
              </Typography>
              <Typography>
                Posts
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography fontWeight={"600"} sx={{ mt: 1 }}>
                {user?.followers.length}
              </Typography>
              <Typography>
                followers
              </Typography>
            </Box>


            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography fontWeight={"600"} sx={{ mt: 1 }}>
                {user?.following.length}
              </Typography>
              <Typography>
                following
              </Typography>
            </Box>

          </Box>


        </Box>



        <Box sx={{
          // border: 1,
          height: "100%",
          width: "100%",
          borderColor: "blue", display: "flex", flexDirection: "column", alignItems: "flex-start"
        }}>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            width: ["100%", "30%"],
            // border:1,
            justifyContent: "flex-start"
          }}>

            <Typography variant='body1' fontWeight={"bold"} sx={{ mt: 1 }}>
              {user?.FullName}
            </Typography>
          </Box>


          <Box sx={{
            // border:1,
            width: ["60%", "45%"]
          }}>
            <Typography variant="body2" sx={{
              mt: 1
            }}>

              {user?.bio} <br />
              {user?.website}
            </Typography>
          </Box>




          <Box sx={{ width: ["100%", "30%"], mb: 1, color: "black", bgcolor: "#d2d4d6", fontWeight: "bold", ":hover": { bgcolor: "#bcbfc2" } }}>
            <Link to={'#'} style={{ textDecoration: "none", color: "black" }}>
              <Typography fontSize={""} m={0} p={0}>
                Professional Dashboard
              </Typography>
              <Typography fontSize={"small"} m={0} p={0}>
                New looks are available
              </Typography>
            </Link>
          </Box>
          <Box sx={{ width: ["100%", "30%"] }}>
            <Link to={'/editprofile'}>
              <Button variant="contained" fullWidth sx={{ color: "black", bgcolor: "#d2d4d6", fontWeight: "bold", ":hover": { bgcolor: "#bcbfc2" } }}>
                Edit Profile</Button></Link>
          </Box>
        </Box>

      </Box>



      {/* profile end */}






      <Box sx={{
        // border:1,
        borderColor: "blueviolet",
        width: "100%", height: "13%",
        display: "flex",
        alignContent: "center",
        mt: 0.5,
        justifyContent: "space-evenly"
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







      {/* navber for contents */}








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
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              mt: 1,
              gap: 0.1,
              boxSizing: "border-box"
            }}>

              {
                user && user?.posts.length > 0 ? (

                  user.posts.map((item) => (
                    <Box sx={{
                      width: "33%",
                      height: 110,
                      backgroundColor: 'crimson',
                      '&:hover': {
                        backgroundColor: 'primary',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }} key={item._id}><img src={item.image.url} style={{ height: "100%", width: "100%" }} /></Box>
                  ))
                ) : (
                  <Typography>
                    No Post Available
                  </Typography>
                )
              }


              {/* <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}><img src={img34} style={{ height: "100%", width: "100%" }} /></Box>
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}><img src={img33} style={{ height: "100%", width: "100%" }} /></Box>
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}><img src={img31} style={{ height: "100%", width: "100%" }} /></Box>
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}><img src={img30} style={{ height: "100%", width: "100%" }} /></Box>
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}><img src={img29} style={{ height: "100%", width: "100%" }} /></Box>
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }} />
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }} />
              <Box sx={{
                width: "33%",
                height: 110,
                backgroundColor: 'greenyellow',
                '&:hover': {
                  backgroundColor: 'primary',
                  opacity: [0.9, 0.8, 0.7],
                },
              }} /> */}



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
              gap: 0.1
            }}>



              {
                user && user?.posts.length > 0 ? (

                  user.posts.map((item) => (
                    <Box sx={{
                      width: "33%",
                      height: 110,
                      backgroundColor: 'green',
                      '&:hover': {
                        backgroundColor: 'primary',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }} key={item._id}><img src={item.image.url} style={{ height: "100%", width: "100%" }} /></Box>
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
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              mt: 1,
              gap: 0.1
            }}>

              {
                user && user?.posts.length > 0 ? (

                  user.posts.map((item) => (
                    <Box sx={{
                      width: "33%",
                      height: 110,
                      backgroundColor: 'greenyellow',
                      '&:hover': {
                        backgroundColor: 'primary',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }} key={item._id}><img src={item.image.url} style={{ height: "100%", width: "100%" }} /></Box>
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


      {/* <Box sx={{
                            
                            mt:1,
                            width:"100%",height:"10%",
                  display:"flex",alignItems:"center",
                justifyContent:"center"}}>
                  <Box sx={{
                            
                            borderColor:"crimson",
                            width:["100%","60%"],
                            // height:"10%",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center",
                            p:1
                           }}>


                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <GridOnRoundedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      POSTS
                    </Typography>
                    </Box>

                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <LiveTvRoundedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      IGTV
                    </Typography>
                    </Box>

                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <BookmarkBorderOutlinedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      SAVED 
                    </Typography>
                    </Box>

                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>

                    <SwitchAccountOutlinedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      TAGGED IN
                    </Typography>
                    </Box>

                  </Box>


                  </Box> */}




      {/* image post start */}
      {/* <Box sx={{
                          //  border:1,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:4}}>

                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box> */}


    </Stack>
  )
}

export default Userprofile