import { AxiosResponse } from 'axios'
import AuthAxios from './AuthAxios'

interface Response {
  id: number
  senderId: number
  senderName: string
  receiverId: number
  receiverName: string
  createdAt: string
  read: boolean
  store: any
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export const getRandomRooms = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/notes/room/`,
    })

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }

    console.log(response)

    return response.data
  } catch (error) {
    console.log(error)
    // throw new Error('네트워크 오류')
  }
}
