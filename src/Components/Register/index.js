import React from 'react'
import styled from 'styled-components';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }
    //!Class Methods

    onNameChange = (event) => {
        this.setState({ name: event.target.value },
            () => {
                return this.state.name
            });
    };

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value },
            () => {
                return this.state.password
            });
    };

    onEmailChange = (event) => {
        this.setState({ email: event.target.value },
            () => {
                return this.state.email
            });
    };

    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('https://afternoon-temple-58818.herokuapp.com/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8',
                'Host': 'https://afternoon-temple-58818.herokuapp.com',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
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

    // onSubmitSignIn = (event) => {
    //     event.preventDefault();
    //     fetch('localhost:/register', {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             email: this.state.email,
    //             password: this.state.password,
    //             name: this.state.name,
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(user => {
    //             if (user.id) {
    //                 this.props.loadUser(user);
    //                 this.props.onRouteChange('home');
    //             }
    //         })
    // }

    //!Render Method past this line.
    render() {
        const { onRouteChange } = this.props

        return (
            <Article>
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" >Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onNameChange}

                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" >Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    placeholder='Email'
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" >Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Finish Registering"
                                onClick={this.onSubmitSignIn}
                            />
                            <div className="lh-copy mt3">
                                <p onClick={() => onRouteChange('signin')} className="pointer f6 link dim black db">Sign In</p>
                            </div>
                        </div>
                    </form>
                </main>
            </Article>
        )
    }
}

// * Styling
const Article = styled.div.attrs({
    className: "br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
})`
background: #0000002d;
`

export default Register