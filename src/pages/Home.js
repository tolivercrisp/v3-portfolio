// React
import React from 'react';

// Material UI
import {
    Box,
} from '@mui/system';
import Grid from '@mui/material/Grid';

// Components
import Navigation from '../components/navigation'
import About from '../components/about'
import Header from '../components/header';


export default function Home() {
    return (
        <div>
            <Grid
            container spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            minHeight='100vh'
            >
                <Grid item xs={3}>
                    <Box sx={{
                        height: '95vh',
                        width: '90vw',
                        border: 1,
                        borderColor: '#f5f5f5',
                    }}>
                        <Navigation />
                        <Header />
                        <About />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}