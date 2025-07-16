import { useState } from "react";
import { Box, IconButton, Typography, Avatar, Grid } from "@mui/material";
import { Favorite, Comment, Share } from "@mui/icons-material";

interface Reel {
    id: number;
    videoUrl: string;
    likes: number;
    comments: number;
    user: string;
    profilePic: string;
    caption: string;
  }
  

const reelsData = [
  {
    id: 1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 120,
    comments: 45,
    user: "user1",
    profilePic: "https://via.placeholder.com/150",
    caption: "Enjoying the sunset! #nature",
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://file-examples.com/wp-content/uploads/2018/04/file_example_MP4_480_1_5MG.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 300,
    comments: 89,
    user: "user2",
    profilePic: "https://via.placeholder.com/150",
    caption: "Workout goals 💪 #fitness",
  },
];

const ReelItem = ({ reel }: { reel: Reel }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Box
    ml={["0%","21%"]}
    width={["100%","25%"]}
      sx={{
        position: "relative",
        height: "100vh",
        // width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "black",
        border:1,
      }}
    >
      {/* Video */}
      <video
        src={reel.videoUrl}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      {/* User Info */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Avatar src={reel.profilePic} alt="User Profile" sx={{ mr: 2 }} />
        <Box>
          <Typography variant="subtitle1" color="white" fontWeight="bold">
            {reel.user}
          </Typography>
          <Typography variant="body2" color="white">
            {reel.caption}
          </Typography>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          zIndex: 1,
        }}
      >
        <IconButton
          color={liked ? "error" : "default"}
          onClick={() => setLiked(!liked)}
        >
          <Favorite fontSize="large" />
        </IconButton>
        <Typography color="white">{liked ? reel.likes + 1 : reel.likes}</Typography>

        <IconButton color="default">
          <Comment fontSize="large" />
        </IconButton>
        <Typography color="white">{reel.comments}</Typography>

        <IconButton color="default">
          <Share fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

const Reels = () => {
  return (
    <Grid container direction="column">
      {reelsData.map((reel) => (
        <Grid item key={reel.id}>
          <ReelItem reel={reel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Reels;
