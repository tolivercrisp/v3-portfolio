// React
import React from 'react';

// Material UI
import {
    Container,
} from '@mui/system';

// Components
import { Typography } from '@mui/material';


export default function Home() {
    return (
        <div>
            <Container maxWitdth={false} disableGutters>
                <Typography>Hello, homepage.</Typography>
            </Container>
        </div>
    )
}