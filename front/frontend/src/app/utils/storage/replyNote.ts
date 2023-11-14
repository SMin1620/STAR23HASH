import { AxiosResponse } from 'axios'
import AuthAxios from './AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

export const replyNote = async (
  roomId: number,
  content: string,
): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/notes/room/${roomId}/reply`,
      data: {
        content: content,
      },
    })

    return response.data
  } catch (error) {
    // console.log(error)
    // throw new Error('네트워크 오류')
  }
}
