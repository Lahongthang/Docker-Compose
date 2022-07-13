import {useState} from 'react'
import { Box, Typography, Grid, Container, Paper, TextField, Stack, Button } from '@mui/material'

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <Container>
            <Paper
                elevation={2}
                sx={{
                    background: '#2b2b88',
                    m: 'auto',
                    mt: 20,
                    p: 5,
                    width: '50vw',
                    maxWidth: '50%',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant='h3'
                    component='h3'
                    textAlign='center'
                    color={'#fff'}
                    mb={3}
                >
                    Welcome back !
                </Typography>
                <Stack
                    component='form'
                    sx={{bgcolor: '#fff', borderRadius: 2}}
                >
                    <TextField
                        id="user-name"
                        autoComplete='true'
                        label="User name"
                        variant="outlined"
                        sx={{bgcolor: '#fff', m: 2}}
                        value={name}
                        onChange={handleChangeName}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type='password'
                        sx={{bgcolor: '#fff', m: 2}}
                        autoComplete='new-password'
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <Button
                        variant='contained'
                        size='large'
                        sx={{m: 2}}
                    >
                        Sign In
                    </Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default Login