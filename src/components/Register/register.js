import React from 'react';

class Register extends React.Component { 
    
    constructor(props) {
        super(props);
            this.state = {
                Name:'',
                Email: '',
                Password: ''
    }
}

onNameRegister = (event) => {
    this.setState({Name: event.target.value})
}
onEmailRegister = (event) => {
    this.setState({Email: event.target.value})
}

onPasswordRegister = (event) => {
    this.setState({Password: event.target.value})
}

onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: this.state.Name,
            email: this.state.Email,
            password: this.state.Password
        })
    }) 
    .then (response => response.json())
    .then (user => {
        if (user.id) { 
            this.props.onRouteChange('home');   
        } 
    })
}

    render () {
     return (

    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow center">
        <main className="pa4 black-80">

                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                   
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                       
                    
                            <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        
                        
                         

                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  id="email-address"  
                            onChange = { this.onEmailRegister }/>


                        
                            type="password" name="password"  id="password"
                            onChange = { this.onPasswordRegister } />

                       
                        <label className="pa0 ma0 lh-copy f5 pointer"><input type="checkbox" /> Remember me</label>
                    
                    </fieldset>
                    
                    <div className="">
                        <input onClick = { this.onSubmitSignIn } 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                        type="submit" 
                        value="Register" />
                    </div>

            
        </main>        
    </article>   
        )
    }

}

export default Register;