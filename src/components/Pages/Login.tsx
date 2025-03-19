import FacebookIcon from '@mui/icons-material/Facebook';
import { Button, Input } from '@mui/joy';
import {
  Box,
  Container,
  Stack,
  Typography
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginRequest, loginRequestFail, loginRequestSuccess } from '../../redux/reducers/userSlice';
import { server } from '../../redux/store';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(x => x.userslice);
  useEffect(() => {
    if (isAuthenticated)
      history('/home')
  }, [isAuthenticated])


  const LoginHandle = async (e: any) => {
    try {
      e.preventDefault();
      dispatch(loginRequest());
      const { data } = await axios.post(`${server}/userLogin`, { Email: email, password: password }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      dispatch(loginRequestSuccess(data));
      if (data.success) {
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        history('/home')
      }

      // dispatch(loginAsync({ email: email, password: password }));


    } catch (error: any) {
      dispatch(loginRequestFail(error.response.data.message))
    }
  }


  return (
    <Container sx={{
      // border: 1,
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
          borderColor: 'grey.500',
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>

          <Typography children={"Instagram"}
            sx={{
              fontFamily: "cursive",
              fontSize: "2rem",
              padding: "3rem",
              boxSizing: "border-box"
            }} />
          <Input variant="outlined"
            placeholder="Phone number, username, or email"
            sx={{ mt: 2, width: [300, 1 / 2] }}
            value={email?.toString()}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" ? LoginHandle(e) : null}
          />

          <Input placeholder="Password"
            type='password'
            variant="outlined"
            sx={{ mt: 1, width: [300, 1 / 2] }}
            value={password?.toString()}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" ? LoginHandle(e) : null}
          />


          <Button
            sx={{ width: [300, 1 / 2], mt: 2, backgroundColor: "rgb(50, 193, 250)" }}
            // type="submit" 
            onClick={LoginHandle}>
            Log in
          </Button>
          <Typography sx={{ mt: 2, width: [300, 1 / 2], textAlign: "center" }}>
            --------------------OR--------------------

          </Typography>
          <Button variant="plain" sx={{ width: [300, 1 / 2], mt: 1 }}>
            <FacebookIcon />
            Log in with Facebook
          </Button>


          <Link to={"/forgotpassword"}
            style={{
              marginTop: "1vh",
              textDecoration: "none", color: "black"
            }}>
            Forgot password?
          </Link>
        </Box>
        <Box sx={{
          border: 1, mt: 2, width: ["100%", "60%"], borderColor: 'grey.500',
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1vh"
        }}>
          <Link to={"/signup"} style={{
            textDecoration: "none",
            color: "black"
          }}>
            Don't have an account?
            <Button variant='plain'>
              Sign up
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  )
}

export default Login