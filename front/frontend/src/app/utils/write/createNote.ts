import axios, { AxiosResponse } from 'axios'
import AuthAxios from '../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const createNote = async (content: string): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/notes`,
      data: { content: content },
    })

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}

export const createNotereset = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/members/reset`,
    })

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }
    console.log(res)
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
