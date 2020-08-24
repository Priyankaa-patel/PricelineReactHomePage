import React from 'react';
import Modal from './modal';
import CreateAccount from './creatAccount';
import LoginForm from './loginForm';

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

    firstNameFunction = (event) => {
        this.setState({ firstName: event.target.value });
    }

    lastNameFunction = (event) => {
        this.setState({ lastName: event.target.value });
    }

    emailFunction = (event) => {
        this.setState({ email: event.target.value });
    }

    passwordFunction = (event) => {
        this.setState({ password: event.target.value });
    }

    confirmPasswordFunction = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    switchForm = () => {
        this.setState({ createAccount: !this.state.createAccount, login: !this.state.login })
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


                    {/* <CreateAccount
                        createAccountFlag={this.state.createAccount}
                        loginFlag={this.state.login}
                        fName={this.state.firstName}
                        lName={this.state.lastName}
                        emailId={this.state.email}
                        password={this.state.password}
                        cPassword={this.state.confirmPassword}
                        firstNameFunction={this.firstNameFunction}
                        lastNameFunction={this.lastNameFunction}
                        emailFunction={this.emailFunction}
                        passwordFunction={this.passwordFunction}
                        confirmPasswordFunction={this.confirmPasswordFunction}
                        switchForm={this.switchForm}
                    /> */}
                    <CreateAccount {...this.state}
                        firstNameFunction={this.firstNameFunction}
                        lastNameFunction={this.lastNameFunction}
                        emailFunction={this.emailFunction}
                        passwordFunction={this.passwordFunction}
                        confirmPasswordFunction={this.confirmPasswordFunction}
                        switchForm={this.switchForm} />

                    <LoginForm
                        {...this.state}
                        emailFunction={this.emailFunction}
                        passwordFunction={this.passwordFunction}
                        switchForm={this.switchForm}
                    />

                </Modal>
                <button className='loginButtonStyle'
                    onClick={this.showModal}
                >Login</button>
            </main >
        );
    }
}

export default Login;