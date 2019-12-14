import { observable, action } from 'mobx'

export const defaultUser = {
    name: '',
    email: '',
    token: '',
    avatar: '',
    stories: [],
}
export let User = observable( {} )

export const setUser = action(data => {
    User = { ...User, ...data }
    saveUser(User)
    console.log(User)
})
const saveUser = data => {
    localStorage.setItem('user', JSON.stringify(data))
    // console.log(User)
}

export let isLogged = false