import React from 'react'
import styles from './index.module.sass'
import { SingleStory } from '../../components/single-story'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { observer } from 'mobx-react'
import { User } from '../../store'

// const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_faOSmA1eOI05HbHvxl-uG8LPJaWb7zP3Kd8dMGurQcNpd_&s'

export const Dashboard = observer (class Dashboard extends React.PureComponent {  

    state = {
        name: User.name,
        avatar: User.avatar,
        stories: User.stories,
        
    }
    componentDidMount(){
        console.log(this.state)
    }
render () {
        const { name, avatar, stories } = this.state
return(
    <div className = {styles.cont}>
        <div className = {styles.header}>
            <img 
                src = { avatar } 
                alt = 'ava'
                className = { styles.avatar }    
            />
            <p>asd</p>
            <h1>
                {`total ${stories.length}`} 
            </h1>
        </div>
        <div className = {styles.list}>
            {new Array(20).fill(0).map((_,i) =>(
                 <SingleStory key = {i}/>
            )) }
        </div>
        <div className = {styles.set}>
            <img 
                src = {avatar} 
                alt = 'ava'
                className = {styles.img}    
            />
            <Button
            title = 'Upload avatar'
            />
            <Input 
            placeholder = 'Name'
            type = 'text'
            auth = {true}
            />
            <p>Change Password</p>
            <Input 
            placeholder = 'Old password'
            type = 'password'
            auth = {true}
            />
            <Input 
            placeholder = 'New password'
            type = 'password'
            auth = {true}
            />  
            <Input 
            placeholder = 'Confirm password'
            type = 'password'
            auth = {true}
            />

        </div>
    </div>
)
}})