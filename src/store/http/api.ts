import axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getUsers = () => {
    return instance.get('users')
}

export const getTodos = (page: number, limit: number) => {
    return instance.get(`todos?_page=${page}&_limit=${limit}`)
}

