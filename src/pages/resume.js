// React
import React from 'react';

// Material UI
import {
    Box,
} from '@mui/system';
import Grid from '@mui/material/Grid';
// Components
import Navigation from '../components/navigation'


export default function Resume() {
    return (
        <div>
            <Grid
            container spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            minHeight='100vh'
            >
                <Grid item xs={2} >
                    <Box sx={{
                        maxWidth: '618px',
                        minHeight: '800px',
                        border: 1,
                        borderColor: '#f5f5f5',
                    }}>
                        <Navigation />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}