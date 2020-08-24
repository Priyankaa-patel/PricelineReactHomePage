import React from 'react';
import Modal from './modal';
import CreateAccount from './creatAccount';

class Login extends React.Component {
    state = {
        show: false,
        login: true,
        createAccount: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    LogIn = () => {
        let ShowLogIn = (this.state.login === false ? { display: 'none' } : {})
        return (
            <form name='login-form' onSubmit={this.OnSubmit} className='loginBox display-block' style={ShowLogIn}>
                <h2 className='center'>Sign In</h2>
                <label className='loginLabel'>Email Id:</label>
                <input type='text' className='loginInput' placeholder='Enter Email'
                    onChange={(event) => this.setState({ email: event.target.value })}
                    value={this.state.email} />
                <label className='loginLabel'>Password:</label>
                <input type='password' className='loginInput' placeholder='Enter Password'
                    onChange={(event) => this.setState({ password: event.target.value })}
                    value={this.state.password} />
                <label className='loginLabel'><input type='checkbox' />Remember my email address</label>
                <input className='loginSubmit' type='submit' value='Submit' />
                <div>
                    <label>Don't have an account? <a onClick={() => this.setState({ createAccount: !this.state.createAccount, login: !this.state.login })}>Create Account</a></label>
                </div>
            </form>
        );
    }

    CreateAccount = () => {
        let ShowCreateAccount = (this.state.createAccount === true ? { display: 'block' } : {})
        return (
            <form name='login-form' onSubmit={this.OnSubmit} className='loginBox display-none' style={ShowCreateAccount}>
                <h2 className='center'>Create Account</h2>
                <label className='loginLabel' htmlFor='firstname'>First Name:</label>
                <input type='text' className='loginInput'
                    onChange={(event) => this.setState({ firstName: event.target.value })}
                    value={this.state.firstName} />
                <label className='loginLabel' htmlFor='lastname'>Last Name:</label>
                <input type='text' className='loginInput'
                    onChange={(event) => this.setState({ lastName: event.target.value })}
                    value={this.state.lastName} />
                <label className='loginLabel' htmlFor='email'>Email Id:</label>
                <input type='text' className='loginInput'
                    onChange={(event) => this.setState({ email: event.target.value })}
                    value={this.state.email} />
                <label className='loginLabel' htmlFor='password'>Password:</label>
                <input type='password' className='loginInput'
                    onChange={(event) => this.setState({ password: event.target.value })}
                    value={this.state.password} />
                <label className='loginLabel' htmlFor='confirmpassword'> Confirm Password:</label>
                <input type='password' className='loginInput'
                    onChange={(event) => this.setState({ confirmPassword: event.target.value })}
                    value={this.state.confirmPassword} />
                <input className='loginSubmit' type='submit' value='Create Account' />
                <div>
                    <label>Already have an account? <a onClick={() => this.setState({ createAccount: !this.state.createAccount, login: !this.state.login })}>Sign in</a></label>
                </div>
            </form>
        );
    }

    // OnSubmit = (event) => {
    //     event.preventDefault();
    // }


    render() {
        return (
            <main>
                <Modal
                    show={this.state.show}
                    handleClose={this.hideModal}>
                    {/* <form name='login-form' onSubmit='OnSubmit()' className='loginBox '>
                        <h2 className='center'>Sign In</h2>
                        <label className='loginLabel'>Email Id:</label>
                        <input type='text' className='loginInput' placeholder='Enter Email' />
                        <label className='loginLabel'>Password:</label>
                        <input type='password' className='loginInput' placeholder='Enter Password' />
                        <label className='loginLabel'><input type='checkbox' />Remember my email address</label>
                        <input className='loginSubmit' type='submit' value='Submit' />
                    </form>
                     */}
                    {this.LogIn()}
                    {this.CreateAccount()}
                    {/* <div>
                        <label>Don't have an account? <a onClick={() => this.setState({ createAccount: !this.state.createAccount, login: !this.state.login })}>Create Account</a></label>
                    </div> */}
                </Modal>
                <button className='loginButtonStyle'
                    onClick={this.showModal}
                >Login</button>
            </main >
        );
    }
}

export default Login;