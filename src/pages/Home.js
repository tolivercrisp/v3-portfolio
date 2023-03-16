// React
import React from 'react';

// Material UI
import {
    Container,
} from '@mui/system';

// Components
import LightDarkButton from '../components/LightDarkButton'


export default function Home() {
    return (
        <div>
            <Container maxWitdth={false} disableGutters>
                <LightDarkButton />
            </Container>
        </div>
    )
}