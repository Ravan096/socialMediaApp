import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";


const Explore = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [cameraActive, setCameraActive] = useState(true);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (galleryImages.length === 0) {
      setGalleryImages([]);
    }
  }, [galleryImages]);

  const handleClose = () => {
    setSelectedFile(null);
    setImgSrc(null);
    setCameraActive(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setSelectedFile(file);
      setImgSrc(fileURL);
      setCameraActive(false);
      console.log(selectedFile);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImgSrc(imageSrc);
      setCameraActive(false);
    }
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: "camera" as PermissionName,
      });
      if (permission.state === "granted" || permission.state === "prompt") {
        triggerFileUpload();
      }
    } catch (error) {
      console.error("Failed to access gallery", error);
    }
  };

  const handleImageSelect = (image: string) => {
    setImgSrc(image);
    setCameraActive(false);
  };

  useEffect(() => {
    return () => {
      if (webcamRef.current && webcamRef.current.video) {
        const stream = webcamRef.current.video.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    };
  }, []);
  return (
    <Box>
      <Button
        variant="contained"
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <Typography color={"black"} fontWeight={"bold"}>
          Post
        </Typography>
      </Button>
      <Box>
        <Box>
          <Box display="flex" flexDirection="column" height="100%">
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#000"
            >
              {cameraActive ? (
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : imgSrc ? (
                <img
                  src={imgSrc}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              ) : (
                <Typography color="white">No Image Selected</Typography>
              )}
            </Box>
            <Box flex={1} p={2} overflow="auto" bgcolor="#f5f5f5">
              <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={fetchGalleryImages}
                sx={{ mb: 2 }}
                fullWidth
              >
                Allow Gallery Access
              </Button>

              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
              {galleryImages.length > 0 ? (
                <Grid container spacing={2}>
                  {galleryImages.map((image, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        src={image}
                        alt={`Gallery ${index}`}
                        onClick={() => handleImageSelect(image)}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography textAlign="center">
                  No Gallery Images Available
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box textAlign="center" p={2}>
          {cameraActive && (
            <Button variant="contained" color="primary" onClick={capture}>
              Capture Image
            </Button>
          )}
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Explore