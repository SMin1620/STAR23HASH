import axios, { AxiosResponse } from 'axios'

import AuthAxios from './AuthAxios'

export interface Response {
  status: string
  message: string
  data: boolean
}

const DOMAIN = process.env.NEXT_PUBLIC_TEST2
export const authAxiosTest = async (): Promise<any> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/notes/room`,
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
