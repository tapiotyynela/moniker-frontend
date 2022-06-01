import { post } from '.'
import { Word } from '../types/word'

export const addWord = async (data: Word) => {
    const res = await post('/word/add', data)
    return res
}