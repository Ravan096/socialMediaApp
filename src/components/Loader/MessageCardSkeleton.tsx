import { Box, Skeleton } from '@mui/material';

const MessageCardSkeleton = () => {
    return (
        <Box display="flex" mt={1} sx={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            {/* Avatar Placeholder */}
            <Box sx={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Skeleton variant="circular" width={40} height={40} />
            </Box>

            {/* Text Placeholder */}
            <Box sx={{ width: "60%", py: 1 }}>
                <Skeleton variant="text" width="80%" height={20} style={{ marginLeft: 8 }} />
                <Skeleton variant="text" width="60%" height={18} style={{ marginLeft: 8 }} />
            </Box>

            {/* Icon Placeholder */}
            <Box sx={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Skeleton variant="circular" width={32} height={32} />
            </Box>
        </Box>
    );
};

export default MessageCardSkeleton;
