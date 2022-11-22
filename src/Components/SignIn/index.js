import React from 'react';
import styled from 'styled-components';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
        };
    }
    // !Class Methods

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value },
            () => {
                return (this.state.signInEmail);
            });
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value },
            () => {
                return (this.state.signInPassword);
            })
    }

    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('https://smart-brain-api-production.up.railway.app/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8',
                'Host': 'https://smart-brain-api-production.up.railway.app',
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }

            })
    }

    // !Render method passed this point.
    render() {
        const { onRouteChange } = this.props;
        return (
            <Article>
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" >Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" placeholder="Email Address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" >Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" placeholder='Password' />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="SIGN IN"
                                onClick={this.onSubmitSignIn}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="pointer f6 link dim black db">Register</p>
                        </div>
                    </form>
                </main>
            </Article>
        )
    }
}

const Article = styled.div.attrs({
    className: "br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
})`
background: #0000002d;
`

export default SignIn