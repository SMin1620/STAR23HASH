import axios, { AxiosResponse } from 'axios'
// import { item } from '@/app/types/types'

interface item {
  userId: number
  id: number
  title: string
  body: string
}

export const getDataTest = async (): Promise<item[]> => {
  try {
    const res: AxiosResponse = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }

    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
