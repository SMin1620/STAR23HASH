import axios, { AxiosResponse } from 'axios'

export interface Response {
  status: string
  message: string
  data: boolean
}

const DOMAIN = process.env.NEXT_PUBLIC_TEST
export const idCheckTest = async (): Promise<Response> => {
  try {
    const res: AxiosResponse = await axios.get(`${DOMAIN}/api/members/check/12`)

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }
    console.log(res)

    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
