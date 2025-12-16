import { Stack, Typography, Box, Button, Grid } from '@mui/material';
import { useState } from 'react';

function Home() {
    return (
        <Stack sx={{
            width: '100%',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Typography sx={{
                fontFamily: '"Helvetica"',
                fontSize: '70px',
                fontWeight: 600,
                letterSpacing: '-3px',
                marginBottom: '-20px'
            }}
                >myAlbumCollection</Typography>

            <Typography sx={{
                fontFamily: '"Helvetica"',
                fontSize: '20px',
                fontWeight: 350, 
                letterSpacing: '-0.7px',
                marginBottom: '20px'
            }}
            >your go-to way of collecting your favorite albums</Typography>

            <Button variant="contained" sx={{
                backgroundColor: '#E35B00',
                width: '163px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: `
                drop-shadow(0px 1.5px 0.7px ${'#000000'}) 
                `
            }}>

            <Typography sx={{
                fontFamily: '"Helvetica"',
                fontSize: '20px',
                fontWeight: 350, 
                letterSpacing: '-0.7px',
                textTransform: 'none',
            }}
            >start collecting</Typography>
                
            </Button>

            <Typography sx={{
                position: 'absolute',
                bottom: '10px',
                fontFamily: '"Helvetica"',
                fontSize: '13px',
                fontWeight: 350, 
                letterSpacing: '-0.7px',
                textTransform: 'none',
            }}
            >timpulzboara @ 2025</Typography>

        </Stack>
    );
};

export default Home