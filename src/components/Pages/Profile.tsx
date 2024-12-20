import { Stack,Box,Avatar,Typography,Button} from '@mui/material';
import proimg from '../../assets/peakpx.jpg';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import img1 from '../../assets/jzc4hvrdcosbikvx0xzf.webp';
import img11 from '../../assets/WallpaperDog-10916523.jpg';
import img12 from '../../assets/WallpaperDog-20593498.jpg';
import img13 from '../../assets/WallpaperDog-20618096.jpg';
import img14 from '../../assets/WallpaperDog-20618169.jpg';
import img21 from '../../assets/model_img_10-500x625.jpg';
import img22 from '../../assets/model_img_3-500x625.jpg';
import img23 from '../../assets/model_img_6-500x625.jpg';
import img24 from '../../assets/2.jpg.webp';
import img25 from '../../assets/5.jpg.webp';
import img26 from '../../assets/bg_1.jpg.webp';
import img27 from '../../assets/bg_2.jpg.webp';
import img29 from '../../assets/7.jpg.webp';
import img30 from '../../assets/category-1.jpg';
import img31 from '../../assets/banner5.jpg';
import img33 from '../../assets/image_5.jpg.webp';
import img34 from '../../assets/item-14.jpg.webp';


const Profile = () => {

  const [followBtn, setFollowBtn]= useState("Follow");
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.warn(event)
  };

  const FollowHandler= ()=>{
    setFollowBtn("Following")
  }


  const onClickMailtoHandler = () => {
    window.location.href = 'mailto:max.mustermann@example.com?body=My custom mail body';
  }
  
  <Button onClick={onClickMailtoHandler}>Send E-Mail</Button>
  
  return (
    <Stack  sx={{
                // border:2,
                height:["","96vh"],width:"100%",margin:"auto"}}>

      

      <Stack direction={["column","row"]} sx={{height:"100%"}}>
        {/*profile start here*/}

      <Box sx={{ 
                // border:1,
                borderColor:"red",
                height:"100%",
                width:["100%","20%"],
                display:"flex",
                flexDirection:"column",
                alignItems:"center"}}>

                  <Box sx={{width:"85%"}}>
                  <Avatar 
                          src={proimg}
                          sx={{
                              //  border:1,
                               borderColor:"greenyellow",
                               height:98,
                               width:98,
                               mt:2
                               }}/>

                    <Typography variant='h5' sx={{mt:1}}>
                      Ashely Todd 
                      <VerifiedRoundedIcon style={{color:"rgb(50, 193, 250)"}}/>
                      </Typography>    
                      <Typography sx={{mt:1}}>@ashleytodd</Typography>      
                      <Typography sx={{mt:1,mb:1}}>Designer</Typography> 
                  </Box>

                      <Box sx={{display:"flex",
                                width:"100%",
                                alignItems:"center",
                                justifyContent:"space-evenly"}}>

                      <Button variant="contained" sx={{backgroundColor: followBtn === 'Following' ? '#fff' : '#2a82c9', 
                                                  color: followBtn === 'Following' ? '#000' : '#fff' }} onClick={FollowHandler}>
                        {followBtn}</Button>

                      <Button variant="text" sx={{color:"black"}}>
                        Message</Button>

                      <Button onClick={onClickMailtoHandler}  variant="text" sx={{color:"black"}}>
                        E-mail</Button>

                        </Box>

                        <Box sx={{
                                  width:"85%"}}>

                        <Typography variant="body2" sx={{
                                        width:"90%",
                                        mt:2
                                        }}>

                          Bringing you closer to the people 
                          and the ones you love 🧡. 
                          Founder of @toddoagency. WATCH 
                          @mynameisashley ON PRIME VIDEO 🎦
                          www.ashleytodd.com
                          </Typography> 

                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            1,475 Posts
                          </Typography>

                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            15m followers
                          </Typography>
                          
                          <Typography fontWeight={"600"} sx={{mt:1}}>
                            4,999 following
                          </Typography>

                          <Typography  sx={{mt:1}}>
                            Followers instagram, armanihotel, omega
                            other 351 ones
                          </Typography>

                          <MoreHorizRoundedIcon/>
                        </Box>

      </Box>


      <Box sx={{
                // border:1,
                borderColor:"black",
                height:"100%",
                width:["100%","80%"]}}>

                  <Box sx={{ 
                            // border:1,
                            borderColor:"blueviolet",
                            width:"100%",height:"13%",
                            display:"flex",
                            alignContent:"center",
                            mt:1,
                            justifyContent:"space-evenly",
                            overflow:"scroll"}}>


                              <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72
                               }}/>
                               
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                               <Avatar 
                          src={proimg}
                          sx={{border:1,
                               borderColor:"greenyellow",
                               height:72,
                               width:72,
                               }}/>
                              
                              

                  </Box>

                  {/* <Box sx={{
                            border:1,
                            borderColor:"crimson",
                            width:"100%",
                            height:"10%",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center",
                            mt:1
                           }}>


                    <Box sx={{
                              width:"25%",
                              height:"100%",
                              display:"flex",
                              justifyContent:"center",
                              alignItems:"center"
                              }}>
                    <GridOnRoundedIcon style={{fontSize:"3rem"}}/>
                    <Typography sx={{display:["none","block"]}}>
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
                    <Typography sx={{display:["none","block"]}}>
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
                    <Typography sx={{display:["none","block"]}}>
                      SAVED ELEMENTS
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
                    <Typography sx={{display:["none","block"]}}>
                      TAGGED IN
                    </Typography>
                    </Box>

                  </Box> */}
                  {/* image post start */}
                  {/* <Box sx={{
                           border:1,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
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



                  </Box> */}
                  <Box sx={{ width: '100%', typography: 'body1'}}>
      
      <TabContext value={value}>
        <Box sx={{ 
          // borderBottom: 1, 
        // borderColor: 'divider',
                            borderColor:"crimson",
                            width:["100%","60%"],
                            // height:"10%",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center"
                            // p:1
                            }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="1" label={
              <Box>
            <GridOnRoundedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      POSTS
                    </Typography>
                    </Box>
                  }/>


            
            <Tab value="2" label={
              <Box>
             <LiveTvRoundedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      IGTV
                    </Typography>
                    </Box> 
                  }/>

            <Tab value="3" label={
              <Box>
            <BookmarkBorderOutlinedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      SAVED 
                    </Typography>
                    </Box>
            }
            />




            <Tab value="4" label={
              <Box>
             <SwitchAccountOutlinedIcon style={{fontSize:"2.5rem"}}/>
                    <Typography sx={{ml:1,display:["none","block"]}}>
                      TAGGED IN
                    </Typography>
                    </Box>
            }
            />



          </TabList>
        </Box>
        <TabPanel value="1" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:1
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'crimson',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img1} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img34} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img33} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img31} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img30} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img29} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
          </TabPanel>

        <TabPanel value="2" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:1
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'green',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img11} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img12} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img13} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img14} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
        </TabPanel>


        <TabPanel value="3" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:1
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img21} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img22} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img23} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
        </TabPanel>


        <TabPanel value="4" sx={{borderColor:"greenyellow",padding:0}}>
        <Box sx={{
                          //  border:2,
                           borderColor:"brown",
                           height:["","77%"],
                           display:"flex",
                           justifyContent:"center",
                           flexWrap:"wrap",
                           width:"100%",
                           mt:1,
                           gap:1
                           }}>

                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img24} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img25} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img26} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}><img src={img27} style={{height:"110px",width:"110px"}}/></Box>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>
                  <Box sx={{
                            width: 110,
                            height: 110,
                            backgroundColor: 'greenyellow',
                            '&:hover': {
                            backgroundColor: 'primary',
                            opacity: [0.9, 0.8, 0.7],},}}/>



                  </Box>
        </TabPanel>
      </TabContext>
    </Box>


      </Box>
      </Stack>

    </Stack>
  )
}

export default Profile