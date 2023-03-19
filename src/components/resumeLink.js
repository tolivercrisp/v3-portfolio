// react
import React from "react";
// Material UI
import { Button, Paper } from "@mui/material";
import { Grid } from "@mui/material"
// Resume
import Resume from '../assets/Resume.pdf'


export default function resumeLink() {
    return(
    <div>
        <Grid
            container spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            minHeight='80vh'
            >
            <Grid item xs={2}>
                <Paper elevation={7} sx={{ flexGrow: 1}}>
                    <Button href={Resume} sx={{textTransform: 'none'}}>
                        Click here to see my resume.
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
    );
};

