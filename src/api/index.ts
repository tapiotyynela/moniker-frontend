import axios from "axios"

const baseUrl = 'http://localhost:3000/api'
const token = localStorage.getItem('token')
const options = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
}

export const post = async (path: string, data: any) => {
    return axios.post(baseUrl + path, data, options)
}

export const get = async (path: string) => {
    return axios.get(baseUrl + path, options)
}

export const update = async (path: string, data: any) => {
    await axios.patch(baseUrl + path, data, options)

}

export const del = async (path: string) => {
    await axios.delete(baseUrl + path, options)

}