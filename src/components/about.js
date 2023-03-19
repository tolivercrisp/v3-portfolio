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
                        As a software developer, I'm passionate about using my skills to create 
                        innovative solutions that solve real-world problems. I'm constantly learning 
                        and expanding my knowledge to stay up-to-date with the latest technologies and 
                        industry trends. With a strong attention to detail and a drive for excellence, 
                        I strive to deliver high-quality code that meets the needs of my clients and exceeds
                        their expectations. Whether I'm working on a team or independently, I approach every
                        project with a collaborative mindset and a commitment to delivering results that
                        make a difference.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};