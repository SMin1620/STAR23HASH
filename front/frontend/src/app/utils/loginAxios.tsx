import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

interface Response {
  status: string
  message: string
  data: boolean
}

// “/api/members/check/{phone}”
// http://192.168.30.130:9000/api/members/check/{phone}
// http://k9e106.p.ssafy.io:9000/api/members/check/{phone}
export const loginAxios = async (phone: string): Promise<any> => {
  try {
    const res: AxiosResponse = await axios.get(
      `${DOMAIN}/api/members/check/${phone}`,
    )
    return res.data
  } catch (error) {
    // console.log(error)
  }
}
