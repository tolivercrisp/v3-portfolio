// React
import React from "react";
// Material UI
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
// image
import Me from '../assets/just-work.png'

export default function Header() {
    return(
        <div>
            <Grid
            container spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            >
                <Grid item xs={3} sm={3} md={3} sx={{
                    marginLeft: 5,
                    marginRight: 5,
                    paddingTop: 4,
                    paddingBottom: 10,
                    }}>
                        <Box component="img"
                        sx={{
                            marginTop: 3,
                            height: 100,
                            width: 100,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="A picture of a beautiful, intelligent, compassionate man."
                        src={ Me }
                        />
                        <Typography
                        variant='h4'
                        fontWeight={'300'}
                        letterSpacing={3}>
                            Toliver Crisp
                        </Typography>  

                        <Typography
                        variant='subtitle2'
                        fontWeight={'700'}
                        letterSpacing={1.2}
                        sx={{ marginTop: 3,}}>
                            Software Developer
                        </Typography> 
                </Grid>
            </Grid>
        </div>
    );
};