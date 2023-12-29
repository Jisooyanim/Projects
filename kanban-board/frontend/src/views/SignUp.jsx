import * as React from 'react';
import Background from '../containers/Background';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { fonts } from '../themes/fonts';
import { colors } from '../themes/colors';

const SignUp = () => {
    const userName =[
        {
            name: "firstName",
            id: "firstName",
            label: "First Name",
        },
        {
            name: "lastName",
            id: "lastName",
            label: "Last Name",
        },
    ];

    const userPass = [
        {
            name: "username",
            label: "Username",
            type: "username",
            id: "username",
        }, 
        {
            name: "password",
            label: "Password",
            type: "password",
            id: "password",
        }, 
    ];

    const renderUserPass = userPass.map(({name, label, type, id}, index) => (
        <TextField
        key={index}
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        type={type}
        name={name}
        autoComplete={name}
        InputProps={{
            style: { color: 'white' }, 
        }}
        InputLabelProps={{
            style: { color: 'lightgray' }, 
        }}
        />
    ));

    const containerStyles = {
        marginTop:250,
        backgroundColor: colors.midnight,
        border: "2px solid #3A3A3B",
        borderRadius:10,
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            username: data.get('username'),
            password: data.get('password'),
        });
    };
    
    return (
        <Background>
            <Container component="main" maxWidth="xs" style={{ ...containerStyles }}>
                <CssBaseline />
                <Box
                sx={{
                    mt: 10,
                    mb: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <Typography 
                        component="h1" 
                        variant="h5" 
                        style={{ 
                            fontFamily: fonts.inter, 
                            fontWeight:600, 
                            color:"white" 
                    }}>
                        Sign Up
                    </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name={userName[0].name}
                            id={userName[0].id}
                            label={userName[0].label}
                            required
                            fullWidth
                            InputProps={{
                                style: { color: 'white' }, 
                            }}
                            InputLabelProps={{
                                style: { color: 'lightgray' }, 
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name={userName[1].name}
                            id={userName[1].id}
                            label={userName[1].label}
                            required
                            fullWidth
                            InputProps={{
                                style: { color: 'white' }, 
                            }}
                            InputLabelProps={{
                                style: { color: 'lightgray' }, 
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {renderUserPass}
                    </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </Background>
    );
}

export default SignUp;