import React from 'react'
import { pageNames } from '../constants'
import './index.css'
import { FaPenAlt } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { User, setUser, defaultUser } from '../../../store'

let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_faOSmA1eOI05HbHvxl-uG8LPJaWb7zP3Kd8dMGurQcNpd_&s'

export const Minidash = observer ( class Minidash extends React.PureComponent{
     
    state = {
        name: User.name,
        avatar: User.avatar
    }
    
    componentDidMount() {
        this.state.name = User.name
        this.state.avatar = User.avatar
        console.log('minidash')
    }

    handleChangeToReg = comp => {
        this.props.handleChange(comp)
        setUser(defaultUser)
    }
    
    doNothing = () => 0
    
render () { 
return (
    <div className = 'mdashbg'>
        <div className = 'dashitems'>
            <img 
            className = 'dashava'
            alt = 'ava'
            src = { this.state.avatar }/>
            <h4>{ this.state.name }</h4>
        </div>
        <div className = 'btnscont' >
                <Btn
                icon = {<FaPenAlt/>}
                paragh = {'Editor'}
                to = {'/editor'}
                handleChangeToReg = {this.doNothing}
                />
                <Btn
                icon = {<MdSettings/>}
                paragh = {'Dashboard'}
                to = {'/dashboard'}
                handleChangeToReg = {this.doNothing}
                />
                <Btn
                icon = {<FaSignOutAlt/>}
                paragh = {'Logout'}
                handleChangeToReg = {this.handleChangeToReg}
                to = {'/'}
                />
         </div>       
    </div>
)}
})
const Btn = (props) => (
    <Link to = {props.to} className = 'link'>
        <div 
        className='minidashbuttons'
        onClick = {()=>props.handleChangeToReg(pageNames.login)}
        >
            <div className = 'dashbutton'>{props.icon}</div>
            <p>{props.paragh}</p>
        </div>
    </Link>
)