import { Stack, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';

function Home() {
    const [step, setStep] = useState<'landing' | 'input'>('landing');
        return (
            <Stack sx={{
                            width: '100%',
                            minHeight: '100vh',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        
                        {step === 'landing' && (
                        <>

                        <Typography sx={{
                                            fontFamily: '"Helvetica"',
                                            fontSize: '70px',
                                            fontWeight: 600,
                                            letterSpacing: '-3px',
                                            marginBottom: '-20px'
                                        }}
                                        >myAlbumCollection
                        </Typography>

                        <Typography sx={{
                                            fontFamily: '"Helvetica"',
                                            fontSize: '20px',
                                            fontWeight: 350, 
                                            letterSpacing: '-0.7px',
                                            marginBottom: '20px'
                                        }}
                                        >your go-to way of collecting your favorite albums
                        </Typography>

                        <Button variant="contained" onClick={() => setStep('input')} sx={{
                                                            backgroundColor: '#E35B00',
                                                            width: '163px',
                                                            height: '38px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            
                                                            '&:focus': {
                                                            outline: 'none',
                                                            boxShadow: 'none',
                                                            },

                                                            '&:hover': {
                                                            backgroundColor: '#F3721D',
                                                            boxShadow: 'none',
                                                            }
                                                        }}>

                                                        <Typography sx={{
                                                                            fontFamily: '"Helvetica"',
                                                                            fontSize: '20px',
                                                                            fontWeight: 350, 
                                                                            letterSpacing: '-0.7px',
                                                                            textTransform: 'none',
                                                                        }}
                                                                        >start collecting
                                                        </Typography>
                
                        </Button>
                        </>
                        )}

                        {step === 'input' && (
                <Stack spacing={2} alignItems="center">
                    <Typography sx={{
                        fontFamily: '"Helvetica"',
                        fontSize: '24px',
                        color: 'white',
                        fontWeight: 300
                    }}>
                        write the first album you think about
                    </Typography>

                    <TextField 
                        autoFocus
                        variant="standard"
                        InputProps={{ disableUnderline: true }} // Scoate linia de jos
                        sx={{
                            backgroundColor: '#d1d1d1',
                            borderRadius: '12px',
                            width: '450px',
                            input: { 
                                textAlign: 'center', 
                                fontSize: '20px', 
                                padding: '10px' 
                            }
                        }}
                    />

                    <Button 
                        variant="contained" 
                        sx={{
                            backgroundColor: '#E35B00',
                            width: '50px',
                            height: '35px',
                            textTransform: 'none',
                                                            '&:focus': {
                                                            outline: 'none',
                                                            boxShadow: 'none',
                                                            },

                                                            '&:hover': {
                                                            backgroundColor: '#F3721D',
                                                            boxShadow: 'none',
                                                            }
                        }}
                    >
                        enter
                    </Button>
                </Stack>
            )}


                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            fontFamily: '"Helvetica"',
                                            fontSize: '13px',
                                            fontWeight: 350, 
                                            letterSpacing: '-0.7px',
                                            textTransform: 'none',
                                        }}
                                        >timpulzboara @ 2025
                        </Typography>

        </Stack>
        
    )
}

export default Home