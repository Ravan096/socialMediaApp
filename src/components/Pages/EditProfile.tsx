import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Input, } from '@mui/joy';
import { Avatar, Box, Button, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { updateUserAsync } from '../../redux/actions/userAction';
import { useAppDispatch } from '../../redux/hooks';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-6%',
    width: '115%',
    height: '100%',
    border: 'none',
    backgroundColor: 'white',
    color: '#ECC94B',
};






function EditProfile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [state, setState] = useState('');
    const [dob, setDob] = useState('');
    const [website, setWebsite] = useState('');
    const [imageprev, setImageprev] = useState('');
    const [avatar, setAvatar] = useState('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const changeImageHandler = (e: any) => {
        const file = e.target.files[0];
        setAvatar(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageprev(reader.result as string);
        };
    };




    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });









    const UpdateHandler = () => {
        // alert("profile updated successfully");
        dispatch(updateUserAsync({ file: avatar, userName: username, Email: email, dob: dob, gender: gender, website: website, state: state, bio: bio, mobile: mobile }))
    };

    return (
        <Stack sx={{
            height: ["100vh", "96vh"], width: ["100%", "80%"], margin: "auto"
        }} >
            {/* edit profile section start */}
            <Box sx={{ height: ["150vh", "90vh"] }}>
                <Box sx={{ width: ["98%", "30%"], margin: "auto", height: "100%", justifyContent: "space-around", display: "flex", flexDirection: "column", }}>
                    {/* <Box alignSelf={"flex-end"}><Button>Save</Button></Box> */}
                    <Box sx={{display: "flex", justifyContent: "center",width:"100%" }}>
                        <Box sx={{width:"10%"}}>
                            <KeyboardBackspaceIcon fontSize='large' onClick={() => navigate(-1)} />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", width:"90%"}}>
                            <Avatar
                                src={imageprev}
                                sx={{
                                    //  border:1,
                                    borderColor: "greenyellow",
                                    height: 92,
                                    width: 92,
                                }} />


                            <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                                Change Profile Picture
                                <VisuallyHiddenInput type="file" onChange={changeImageHandler} />
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            Full Name
                        </Typography>
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            UserName
                        </Typography>
                        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            Bio
                        </Typography>
                        <Input value={bio} onChange={(e) => setBio(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            Gender
                        </Typography>
                        <Input value={gender} onChange={(e) => setGender(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            Email
                        </Typography>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            Mobile
                        </Typography>
                        <Input value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            State
                        </Typography>
                        <Input value={state} onChange={(e) => setState(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography >
                            Date of Birthdate
                        </Typography>
                        <Input type="date" sx={{ width: ["54%", "47%"] }} value={dob} onChange={(e) => setDob(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: ["space-between", "space-between"], }}>
                        <Typography>
                            Website
                        </Typography>
                        <Input value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="contained" onClick={UpdateHandler}>
                            Update Your Profile
                        </Button>
                    </Box>


                </Box>



            </Box>
            {/* edit profile section end */}


        </Stack >

    );
}

export default EditProfile;
