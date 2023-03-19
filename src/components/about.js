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
                        <Typography variant='body1' align='left'>
                        I'm proud of the diverse technologies I've added to my development toolbox!
                        Although I'm graduating from my full stack bootcamp soon, I'll remain a lifetime learner
                        and student because I've found constant, habitual learning to be the key to a fruitful
                        and rewarding software career.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};