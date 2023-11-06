import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

interface Response {
  status: string
  message: string
  data: boolean
}

// “/api/members/check/{phone}”
// http://192.168.30.130:9000/api/members/check/{phone}
// http://k9e106.p.ssafy.io:9000/api/members/check/{phone}
export const loginAxios = async (phone: string): Promise<Response> => {
  try {
    const res: AxiosResponse = await axios.get(
      `${DOMAIN}/api/members/check/${phone}`,
    )

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }

    return res.data
  } catch (error) {
    console.log(error)
    throw new Error('네트워크 오류')
  }
}
