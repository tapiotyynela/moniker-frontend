import axios from 'axios'
import { Word } from '../types/word'

export const addWord = async (data: Word) => {
    const res = await axios.post('http://localhost:3000/api/word/add', data)
    return res
}