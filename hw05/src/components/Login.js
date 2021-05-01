import React, {Component} from 'react';
import CustomInput from './CustomInput';
import Button from './Button';
import './Login.css';
import { Link } from '@material-ui/core';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    };
    render() {
        return (
            <dev>
                <form className="form">
                    <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="text"
                    />
                    <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="password"
                    />

                    <Button type="button" color="primary" className="form__custom-button">
                        Log in
                    </Button>
                    <Link
                    component="button"
                    variant="body1"
                    onCLick={()=>{
                        console.info("Forgot username/password");
                    }}>
                        Forgot username/password
                    </Link>
                </form>
            </dev>
        );
    }
}

export default Login;