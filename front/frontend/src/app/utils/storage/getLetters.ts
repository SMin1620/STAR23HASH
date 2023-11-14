import { AxiosResponse } from 'axios'
import AuthAxios from './AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

export const getLetters = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/letters`,
    })

    // console.log(response.data.data)

    return response.data
  } catch (error) {
    // console.log(error)
    // throw new Error('네트워크 오류')
  }
}
