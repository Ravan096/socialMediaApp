import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Input } from '@mui/joy';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingActivity = () => {
    const [searchInp, setSearchInp] = useState('');
    const sendHandler = () => {
        console.log("message send successfully");
        console.log(searchInp);
    }
    return (
        <Stack>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: '10px',
                borderBottom: '1px solid #dbdbdb'
            }}>
                <Link to={'/userprofile'}>
                    <ArrowBackIosIcon /></Link>
                <Typography>
                    Settings and Privacy
                </Typography>
            </Box>

            <Box>
                <Input variant="outlined"
                    placeholder="Search..."
                    sx={{ mt: 0, width: 1, mb: 1, mr: 1 }}
                    value={searchInp}
                    onChange={(e) => setSearchInp(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" ? sendHandler() : null} />
            </Box>


            <Box sx={{
                borderBottom: '1px solid #dbdbdb'
            }}>
                <Typography fontSize={'small'}>
                    Your Account
                </Typography>

                <Box sx={{ display: "flex" }}>
                    <Link to={'#'}>
                        <AccountCircleIcon /></Link>
                    <Box>
                        <Typography>
                            Account Center
                        </Typography>
                        <Typography fontSize={'small'}>
                            Password, security, personal details and prefrances
                        </Typography>
                    </Box>

                    <KeyboardArrowRightIcon />
                </Box>
            </Box>


            <Box sx={{
                borderBottom: '1px solid #dbdbdb'
            }}>
                <Typography fontSize={'small'}>
                    How you use Instagram
                </Typography>

                <Box sx={{}}>
                    <Link to={'#'} style={{
                        display: "flex"
                    }}>
                        <AccountCircleIcon />
                        <Typography>
                            Saved
                        </Typography>

                        <KeyboardArrowRightIcon />
                    </Link>
                    <Link to={'#'} style={{
                        display: "flex"
                    }}>
                        <AccountCircleIcon />
                        <Typography>
                            Archive
                        </Typography>

                        <KeyboardArrowRightIcon />
                    </Link>
                    <Link to={'#'} style={{
                        display: "flex"
                    }}>
                        <AccountCircleIcon />
                        <Typography>
                            Your activity
                        </Typography>

                        <KeyboardArrowRightIcon />
                    </Link>
                    <Link to={'#'} style={{
                        display: "flex"
                    }}>
                        <AccountCircleIcon />
                        <Typography>
                            Notifications
                        </Typography>

                        <KeyboardArrowRightIcon />
                    </Link>
                    <Link to={'#'} style={{
                        display: "flex"
                    }}>
                        <AccountCircleIcon />
                        <Typography>
                            Time spents
                        </Typography>

                        <KeyboardArrowRightIcon />
                    </Link>
                </Box>
            </Box>
        </Stack>
    )
}

export default SettingActivity