import { Stack,Box,Typography, Avatar, Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import proimg from '../../assets/peakpx.jpg';
import { Link } from 'react-router-dom';




const Like = () => {
  return (
    <Stack ml={["0%","21%"]} sx={{
      // border:1,
      width: {
        lg: '80%',
        md: '80vw',
        xs: '100vw'
      },margin:"auto"}}>

        {/* header start  */}
      
{/* header end */}

<Box sx={{display:"flex",alignItems:"center"}}>
<Link to={'/home'}><ArrowBackIcon style={{fontSize:"2.5rem",color:"black"}}/></Link>
<Typography variant='h5'>
  Notification
</Typography>
</Box>

{/* like body start */}


<Box>
  <NotificationCard image={proimg} name={"user"} desc={"requsted to follow you. 21 min"}/>
  <NotificationCard image={proimg} name={"admin"} desc={"started following you. 51 min"}/>
  <NotificationCard image={proimg} name={"user1"} desc={"requsted to follow you. 21 min"}/>
  <NotificationCard image={proimg} name={"user2"} desc={"requsted to follow you. 3h"}/>
  <NotificationCard image={proimg} name={"user3"} desc={"hello how are you"}/>
  <NotificationCard image={proimg} name={"user4"} desc={"hello how are you"}/>
  <NotificationCard image={proimg} name={"user5"} desc={"hello how are you"}/>
  <NotificationCard image={proimg} name={"user6"} desc={"hello how are you"}/>

    </Box>

</Stack>
  )
}

export default Like



const NotificationCard=({image,name,desc}:any)=>{
  return(
    <Box sx={{display:"flex",
               alignItems:"center",justifyContent:"space-between",
               width:{lg:"100%",md:"100%",xs:"100%"},
               p:1}}>
    <Box sx={{width:"15%"}}>
    <Avatar 
                  src={image}
                  sx={{
                      //  border:1,
                       borderColor:"greenyellow",
                       height:48,
                       width:48,
                       }}/>
    </Box>
                       <Box width={"60%"}>
                       <Typography>
                          {name}
                        </Typography>
                        <Typography >
                          {desc}
                        </Typography>
                        </Box>
                        <Box sx={{mr:1,width:"20%"}}>
                        <Button variant='contained' >Follow</Button>
                        </Box>

    </Box>
  )
}