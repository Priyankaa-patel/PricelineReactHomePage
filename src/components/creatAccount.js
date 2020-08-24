import React from 'react';

class CreateAccount extends React.Component {
    render() {
        //const { createAccountFlag, fName, lName, emailId, password, cPassword, firstNameFunction, lastNameFunction, emailFunction, passwordFunction, confirmPasswordFunction, switchForm } = props;
        const { firstNameFunction, lastNameFunction, emailFunction, passwordFunction, confirmPasswordFunction, switchForm, createAccount, firstName, lastName, email, password, confirmPassword } = this.props;

        let ShowCreateAccount = (createAccount === true ? { display: 'block' } : {})

        return (
            <form name='login-form' className='loginBox display-none' style={ShowCreateAccount}>
                <h2 className='center'>Create Account</h2>
                <label className='loginLabel' htmlFor='firstname'>First Name:</label>
                <input type='text' className='loginInput'
                    onChange={firstNameFunction}
                    value={firstName} />
                <label className='loginLabel' htmlFor='lastname'>Last Name:</label>
                <input type='text' className='loginInput'
                    onChange={lastNameFunction}
                    value={lastName} />
                <label className='loginLabel' htmlFor='email'>Email Id:</label>
                <input type='text' className='loginInput'
                    onChange={emailFunction}
                    value={email} />
                <label className='loginLabel' htmlFor='password'>Password:</label>
                <input type='password' className='loginInput'
                    onChange={passwordFunction}
                    value={password} />
                <label className='loginLabel' htmlFor='confirmpassword'> Confirm Password:</label>
                <input type='password' className='loginInput'
                    onChange={confirmPasswordFunction}
                    value={confirmPassword} />
                <input className='loginSubmit' type='submit' value='Create Account' />
                <div>
                    <label>Already have an account?
                    <button onClick={switchForm}>Sign in</button></label>
                </div>
            </form>
        );
    }
}

export default CreateAccount;