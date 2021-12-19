import React, { useState } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';

import emailjs from 'emailjs-com';

import * as S from './styled';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState({
        value: "",
        error: false,
    });
    const [alert, showAlert] = useState(null);
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handler = (e) => {
        e.preventDefault();

        setName("");
        setEmail({
            ...email,
            value: "",
        });
        setMessage("")

        setLoading(true);

        showAlert({
            type: 'error',
            message: 'An error occurred, Please try again',
        })

        emailjs.send('service_sjgmcoe', 'template_cwtfqna', {
            from_name: e.target[0].value,
            to_name: e.target[1].value,
            message: e.target[2].value
        }, "user_rpJpI3jTP8PU330FsIUh9")
        .then(() => {
            setLoading(false);
            showAlert({
                type: 'success',
                message: 'Message Sent, We will get back to you shortly',
            })
        },
        () => {
            setLoading(false);
            showAlert({
                type: 'error',
                message: 'An error occurred, Please try again',
            })
        });
    }

    const emailInputHandleChange = (event) => {
        const isEmail = validateEmail(event.target.value);

        setEmail({
            value: event.target.value,
            error: !isEmail,
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        showAlert(null);
    };

    const inputHandleChange = (event, setStateFunc) => {
        setStateFunc(event.target.value);
    };

    return (
        <S.Wrapper>
            {isLoading ?
                <S.Loader />
                : (<Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handler}
                >
                    <S.Header>
                        Do you have any questions? Feel free to write us!
                    </S.Header>
                    <S.Input
                        fullWidth
                        label="Name"
                        variant="standard"
                        value={name}
                        onChange={(e) => inputHandleChange(e, setName)}
                        placeholder="Enter your name"
                    />
                    <S.Input
                        fullWidth
                        label="Email"
                        variant="standard"
                        value={email.value}
                        error={email.error}
                        onChange={emailInputHandleChange}
                        placeholder="example@mail.ru "
                    />
                    <S.Input
                        fullWidth
                        label="Message"
                        variant="standard"
                        value={message}
                        onChange={(e) => inputHandleChange(e, setMessage)}
                        placeholder="Your message to us"
                    />
                    <S.Button
                        type="submit"
                        variant="contained"
                        disabled={!name.length || !email.value.length || email.error || !message.length}
                    >
                        SEND
                    </S.Button>
                </Box>)}
            {alert && (
                <Snackbar
                    open={alert}
                    autoHideDuration={4000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={alert.type}>{alert.message}</Alert>
                </Snackbar>
            )}
        </S.Wrapper>
    );
}

export default Form;
