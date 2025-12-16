import React from 'react';

import { Box, Stack } from '@mui/material';

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return(
        <Stack sx={{
                        position: 'relative',
                        width: '100%',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                    }}
        >
            <Stack sx={{
                position: 'absolute',
                inset: 0,
                zIndex: -1, 
                backgroundImage: `radial-gradient(
                    circle at 10% 10%, 
                  #242424 0%,       
                  #000000 100%
                )`,
            }} />

            {children}
        </Stack>
    );
};
export default Background