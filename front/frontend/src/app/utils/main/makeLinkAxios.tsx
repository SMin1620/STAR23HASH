import AuthAxios from '../storage/AuthAxios'
import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const MakeLinkAxios = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/rolls/link`,
    })

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }

    console.log(response.data.data)

    return response.data
  } catch (error) {
    console.log(error)
    // throw new Error('네트워크 오류')
  }
}
