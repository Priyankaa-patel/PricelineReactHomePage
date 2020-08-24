import React from 'react';

class LoginForm extends React.Component {
    render() {
        //const { createAccountFlag, fName, lName, emailId, password, cPassword, firstNameFunction, lastNameFunction, emailFunction, passwordFunction, confirmPasswordFunction, switchForm } = props;
        const { emailFunction, passwordFunction, switchForm, login, email, password } = this.props;

        let ShowLogIn = (login === true ? { display: 'block' } : {})

        return (
            <form name='login-form' className='loginBox display-none' style={ShowLogIn}>
                <h2 className='center'>Sign In</h2>

                <label className='loginLabel' htmlFor='email'>Email Id:</label>
                <input type='text' className='loginInput'
                    onChange={emailFunction}
                    value={email} />
                <label className='loginLabel' htmlFor='password'>Password:</label>
                <input type='password' className='loginInput'
                    onChange={passwordFunction}
                    value={password} />

                <input className='loginSubmit' type='submit' value='Submit' />
                <div>
                    <label>Don't have an account?
                    <a onClick={switchForm}>Create Account</a></label>
                </div>
            </form>
        );
    }
}

export default LoginForm;