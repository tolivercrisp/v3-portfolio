// React
import React from "react";

// Material UI
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function About() {
    return(
        <div>
            <Grid
            container spacing={0}
            direction='column'
            justifyContent='start'
            >
                <Grid item xs={3} sx={{marginLeft: 5, marginRight: 5}}>
                    <Box sx={{ display: 'flex'}}>
                        <Typography variant='body1' align='justify'>
                        I'm a software engineer that likes to find creative solutions for big problems. 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};