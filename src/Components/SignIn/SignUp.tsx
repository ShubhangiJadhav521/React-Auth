import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./SignIn.css";
import Avatar from '@mui/material/Avatar';
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
import { useUser } from '../Context/AuthContext';


interface SignUPProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;

}
function SignUp({ setSignUp }: SignUPProps) {
  const { signUp } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', Cpassword: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the input fields (e.g., check for email format)
    if (!isValidEmail(formData.email) || formData.password === '') {
      setError('Invalid email or password.');
      return;
    }
    if (formData.password !== formData.Cpassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.email === '' || formData.password === '') {
      setError('Please fill in all fields.');
      return;
    }

    const auth = signUp(formData.email, formData.password);
    setSignUp(false);
  };
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='Signin-container'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmitSignUp} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Cpassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.Cpassword}
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  {"already have account? SignIn"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {error && (
          <div className='error'>{error}</div>
        )}
      </Container>
    </div>
  );
}

export default SignUp;
