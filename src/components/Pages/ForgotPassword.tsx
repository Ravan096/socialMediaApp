import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';
import { Button, Input } from '@mui/joy';
import {
  Box,
  Container,
  Stack,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgetPasswordAsync } from '../../redux/actions/userAction';
import { useAppDispatch } from '../../redux/hooks';


const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();



  const ResetHandler = () => {
    dispatch(forgetPasswordAsync({email}))
  }
  return (
    <Container sx={{
      height: '90vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }} >
      <Typography children={"Instagram"}
        sx={{
          fontFamily: "cursive",
          fontSize: "2rem",
          padding: "3rem",
          boxSizing: "border-box"
        }} />


      <Stack sx={{
        width: ["100%", "60%"], height: "80%", display: "flex",
        alignItems: "center"
      }}>
        <Box sx={{
          border: 1, width: ["100%", "60%"],
          borderColor: 'grey.500',
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <LockResetSharpIcon style={{ fontSize: "5rem" }} />
          <Typography color={"black"} fontWeight={"545"} sx={{ mt: 2 }}>
            Trouble logging in?
          </Typography>

          <Typography variant='caption' fontSize={12} sx={{ width: '60%', mt: 2 }}>
            Enter your email, phone,
            or username and we'll send you a link to get back into your account.
          </Typography>

          <Input variant="outlined"
            placeholder="Phone number, username, or email"
            sx={{ mt: 2, width: [300, 1 / 2] }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button disabled={!email}
            sx={{ width: 1 / 2, mt: 2, backgroundColor: "rgb(50, 193, 250)" }}
            type="submit"
            onClick={ResetHandler}
          >
            Send login link
          </Button>




          <Link to={"/forgotpassword"} style={{ marginTop: "1vh", textDecoration: "none" }}>
            Cant't reset your password?
          </Link>
          <Typography sx={{ mt: 2, width: [300, 1 / 2], textAlign: "center" }}>
            --------------------OR--------------------

          </Typography>
          <Link to={"/signup"} style={{ textDecoration: "none", color: "black" }} >

            Create new account
          </Link>
        </Box>

        <Box sx={{
          border: 1, mt: 2, width: ["100%", "60%"], borderColor: 'grey.500',
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1vh"
        }}>

          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button variant='plain'>
              Back to login
            </Button>
          </Link>

        </Box>
      </Stack>
    </Container>
  )
}

export default ForgotPassword