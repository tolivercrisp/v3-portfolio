// React
import React from 'react';

// Material UI
import {
    Box,
} from '@mui/system';
import Grid from '@mui/material/Grid';
// Components
import Navigation from '../components/navigation'
import ResumeLink from '../components/resumeLink';


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
                    <Navigation />
                    <Box sx={{
                        minWidth: '618px',
                        minHeight: '800px',
                        maxWidth: '618px',
                        maxHeight: '800px',
                        border: 1,
                        borderColor: '#f5f5f5',
                    }}>
                        <ResumeLink />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}