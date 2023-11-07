import { AxiosResponse } from 'axios'
import AuthAxios from './AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

export const getRandomRooms = async (): Promise<any> => {
  console.log('DOMAIN : ', DOMAIN)

  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/notes/room`,
    })

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }

    console.log('getrandom out', response)

    return response.data
  } catch (error: any) {
    console.log(error.response)
    // throw new Error('네트워크 오류')
  }
}
