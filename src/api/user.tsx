import axios from 'axios'
import { LoginData, Search } from '../types/user'

export const login = async (data: LoginData) => {
    const res = await axios.post('http://localhost:3000/api/users/login', data)
    return res
}

export const getUsersBySearchWord = async (data: Search) => {
    const res = await axios.post('http://localhost:3000/api/users/search', data)
    return res
}