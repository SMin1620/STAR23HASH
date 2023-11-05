import { AxiosResponse } from 'axios'
import AuthAxios from './AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export const getNote = async (noteId: number): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/notes/${noteId}`,
    })

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }

    return response.data
  } catch (error) {
    console.log(error)
    // throw new Error('네트워크 오류')
  }
}
