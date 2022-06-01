import { get, post } from '.'
import { LoginData, Search } from '../types/user'

export const login = async (data: LoginData) => {
    const res = await post('/users/login', data)
    localStorage.setItem('token', res.data.token)
    return res
}

export const getUsersBySearchWord = async (data: Search) => {
    const res = await post('/users/search', data)
    return res
}

export const verifyUserToken = async () => {
    const res = await get('/users/verify')
    return res
}