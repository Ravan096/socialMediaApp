

interface Story {
    id: number;
    username: string;
    profilePic: string;
    contentUrl: string; // Image or video URL
}
const StoryContainer = () => {

    const storiesData: Story[] = [
        {
            id: 1,
            username: "john_doe",
            profilePic: "https://via.placeholder.com/150",
            contentUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
            id: 2,
            username: "jane_smith",
            profilePic: "https://via.placeholder.com/150",
            contentUrl: "https://www.w3schools.com/html/pic_trulli.jpg",
        }
    ];

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);


    return (
        <div>
            <h2>Stories</h2>
            <StoryViewer
                stories={storiesData}
                currentStoryIndex={currentStoryIndex}
                setCurrentStoryIndex={setCurrentStoryIndex}
            />
        </div>

    )
}

export default StoryContainer


import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface StoryProps {
    stories: Story[];
    currentStoryIndex: number;
    setCurrentStoryIndex: (index: any) => void;
}

const StoryViewer: React.FC<StoryProps> = ({ stories, currentStoryIndex, setCurrentStoryIndex }) => {
    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev >= 30) {
                    console.log(timer)
                    setCurrentStoryIndex((prevIndex:any) => (prevIndex + 1) % stories.length);
                    return 0; // Reset the timer after switching the story
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [setCurrentStoryIndex, stories.length]);

    const handleNext = () => {
        setCurrentStoryIndex((currentStoryIndex + 1) % stories.length);
    };

    const handlePrev = () => {
        setCurrentStoryIndex((currentStoryIndex - 1 + stories.length) % stories.length);
    };

    const currentStory = stories[currentStoryIndex];

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "400px",
                bgcolor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box sx={{ position: "absolute", top: 16, left: 16 }}>
                <Avatar src={currentStory.profilePic} />
                <Typography color="white">{currentStory.username}</Typography>
            </Box>

            {/* Media Display */}
            {currentStory.contentUrl.endsWith(".mp4") ? (
                <video
                    src={currentStory.contentUrl}
                    autoPlay
                    muted
                    loop
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            ) : (
                <img
                    src={currentStory.contentUrl}
                    alt="story"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            )}

            {/* Navigation Buttons */}
            <IconButton
                onClick={handlePrev}
                sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)" }}
            >
                <ArrowBack style={{ color: "white" }} />
            </IconButton>
            <IconButton
                onClick={handleNext}
                sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)" }}
            >
                <ArrowForward style={{ color: "white" }} />
            </IconButton>
        </Box>
    );
};

export { StoryViewer };

