import React from 'react';
import Background from '../containers/Background';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { fonts } from '../themes/fonts';
import { colors } from '../themes/colors';

const Login = () => {
    const userInput = [
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

    const renderUserInput = userInput.map(({name, label, type, id}, index) => (
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
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {renderUserInput}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs={6}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link href="/signup" variant="body2">
                                    Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Background>
    );
};

export default Login;