import FacebookIcon from '@mui/icons-material/Facebook';
import { Button, Input } from '@mui/joy';
import {
  Box,
  Container,
  Stack,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUserAsync } from '../../redux/actions/userAction';
import { useAppDispatch } from '../../redux/hooks';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const SignUpHandle = () => {
    dispatch(registerUserAsync({ FullName: name, userName: username, Email: email, Password: password }))
  }







  return (
    <Container sx={{
      height: ['100vh', '90vh'],
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }} >


      <Stack sx={{
        width: ["100%", "60%"], height: ["80%", "80%"], display: "flex",
        alignItems: "center",
      }}>
        <Box sx={{
          border: 1, width: ["100%", "60%"],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderColor: 'grey.500'
        }}>

          <Typography children={"Instagram"}
            sx={{
              fontFamily: "cursive",
              fontSize: "2rem",
              padding: "3rem",
              boxSizing: "border-box"
            }} />

          <Typography sx={{ width: [300, 1 / 2] }} fontSize={16} fontWeight={600} color={"gray"}>
            Sign up to see photos and videos
            from your friend
          </Typography>
          <Button variant="plain" sx={{ width: [300, 1 / 2], mt: 1 }}>
            <FacebookIcon />
            Log in with Facebook
          </Button>
          <Typography sx={{ mt: 2, width: [300, 1 / 2], textAlign: "center" }}>
            --------------------OR--------------------
          </Typography>
          <Input variant="outlined"
            placeholder="Phone number or Email"
            sx={{ mt: 2, width: [300, 1 / 2] }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input placeholder="Full Name"
            variant="outlined"
            sx={{ mt: 1, width: [300, 1 / 2] }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input placeholder="Username"
            variant="outlined"
            sx={{ mt: 1, width: [300, 1 / 2] }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder="Password"
            type='password'
            variant="outlined"
            sx={{ mt: 1, width: [300, 1 / 2] }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />



          <Typography variant='caption' sx={{ mt: 2, width: [300, 1 / 2], borderColor: 'grey.500' }}>
            People who use our service may have uploaded your contact
            information to Instagram. <a href="#">Learn More</a>
          </Typography>

          <Typography variant='caption' sx={{ mt: 2, width: [300, 1 / 2], borderColor: 'grey.500' }}>
            By signing up, you agree to our <a href="#">Terms</a> ,
            <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a> .
          </Typography>

          <Button sx={{
            width: 1 / 2,
            mt: 2, backgroundColor: "rgb(50, 193, 250)", mb: 2
          }}
            type="submit"
            onClick={SignUpHandle}>
            Sign up
          </Button>
        </Box>
        <Box sx={{
          border: 1, mt: 2, width: ["100%", "60%"], borderColor: 'grey.500',
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1vh"
        }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Have an account?
            <Button variant='plain'>
              Log in
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  )
}

export default SignUp