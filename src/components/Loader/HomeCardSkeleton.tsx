import {
    Box,
    Divider,
    GlobalStyles,
    Skeleton,
    SwipeableDrawer,
    Typography
} from '@mui/material';

const HomeCardSkeleton = () => {
  return (
    <Box sx={{ width: ['100vw', '100%'], mb: 2 }}>
      {/* Header - Avatar and user info */}
      <Box display="flex" alignItems="center" p={1}>
        <Skeleton variant="circular" width={62} height={62} sx={{ ml: 2 }} />
        <Box sx={{ ml: 2 }}>
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={80} height={18} />
        </Box>
      </Box>

      {/* Post image */}
      <Box display="flex" justifyContent="center" mt={1}>
        <Skeleton variant="rectangular" width={350} height={350} />
      </Box>

      {/* Icons row */}
      <Box display="flex" justifyContent="space-between" mt={1} px={2}>
        <Box display="flex" gap={2}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={32} height={32} />
        </Box>
        <Skeleton variant="circular" width={32} height={32} />
      </Box>

      {/* Caption and comments */}
      <Box mt={1} px={2}>
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="text" width="50%" height={20} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="40%" height={16} />
      </Box>

      {/* More icon */}
      <Skeleton variant="circular" width={28} height={28} sx={{ ml: 2, mt: 1 }} />

      {/* Optional drawer simulation */}
      {/* <SwipeableDrawer anchor="bottom" open={true} onClose={() => {}} onOpen={() => {}}>
        <GlobalStyles styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(60% - 56px)`,
            overflow: 'auto',
          }
        }} />
        <Box px={2} py={1}>
          <Typography fontWeight="bold">Loading Comments...</Typography>
          <Divider sx={{ my: 1 }} />
          {[...Array(5)].map((_, idx) => (
            <Box key={idx} display="flex" alignItems="center" mb={1}>
              <Skeleton variant="circular" width={40} height={40} />
              <Box ml={1} width="100%">
                <Skeleton variant="text" width="60%" height={16} />
                <Skeleton variant="text" width="80%" height={14} />
              </Box>
              <Skeleton variant="circular" width={16} height={16} sx={{ ml: 1 }} />
            </Box>
          ))}
        </Box>
      </SwipeableDrawer> */}
    </Box>
  );
};

export default HomeCardSkeleton;
