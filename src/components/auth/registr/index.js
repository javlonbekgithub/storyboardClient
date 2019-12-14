import React from 'react'
import { Button } from '../../button'
import { Input } from '../../input'
import './index.css'
import { pageNames } from '../constants'
import { Api } from '../../../api'
import { setUser } from '../../../store'
import { observer } from 'mobx-react'


export const Registration = observer( class Registration extends React.PureComponent {  
    state = {
        email: '',
        password: '',
        rePassword: '',
    }

    handleChange = ({ target }) => {this.setState({[target.name]:target.value})}
    

    handleChangeToDash = comp => {this.props.handleChange(comp)}
    
    handleSubmit = async () => {
        const { email, password, rePassword } = this.state

        
        if (email.length !== 0 && password.length !== 0 && rePassword.length !== 0) {
            if (email.search('@') < 0) {
                    alert('email_doesnt_exists')
                } else {
                if (password !== rePassword) {
                    alert('Passwords do not match')
                } else {
                    try {
                        let res = await Api('registration', { email, password }, 'post')
                        console.log(res)
                        if (!res.error) {
                            setUser(res)
                            this.props.handleChange(pageNames.dashboard)
                        } else {
                            alert(res.error)
                        }
                    } catch(err) {
                        console.log(err)
                    }
                }
            }
        } else {
            alert('please_enter_the_data')
        }
        
}

render () {

    let { email, password, rePassword } = this.state
return (
    <form className = 'regbg'>
        <h1>Registration</h1>
            <Input 
                placeholder = 'email'
                type = 'email'
                name = 'email'
                auth = {true}
                value={email}
                onChange={this.handleChange}
            />
            <Input 
                placeholder = 'enter a password'
                type = 'password'
                name = 'password'
                auth = {true}
                value={password}
                onChange={this.handleChange}
            />
            <Input 
                placeholder = 'rewrite the password'
                name = 'rePassword'
                type = 'password'
                auth = {true}
                value={rePassword}
                onChange={this.handleChange}
            />
            <Button
                 title = 'Registrate'
                 full = {true}
                 pageNames = {pageNames.login}
                 onClick = {this.handleSubmit}
            />
            <span
                onClick={() => this.props.handleChange(pageNames.login)}
            > Do haven an account ?</span>
   </form>
)}})
