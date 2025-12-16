import React from 'react';

import { Box, Stack } from '@mui/material';
import AlbumCards from '../pages/AlbumCards';

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return(
<Stack sx={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
        }}>

<Box sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 0, 
                pointerEvents: 'none',
                backgroundImage: `radial-gradient(
                    circle at 20% -5%, 
                    #1E1C1C 0%,       
                    #000000 90%
                )`,
            }} />

            <Box sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                opacity: 0.15,
            }}>
                <AlbumCards />
            </Box>

            <Box sx={{ 
                position: 'relative', 
                zIndex: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {children}
            </Box>
        </Stack>
    );
};

export default Background;