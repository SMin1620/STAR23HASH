import { AxiosResponse } from 'axios'

import AuthAxios from './AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

export const authAxiosTest = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/notes`,
      data: {
        content: 'hello',
      },
    })

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }
    console.log(response)

    return response.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
