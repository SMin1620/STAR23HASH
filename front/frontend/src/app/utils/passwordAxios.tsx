import axios, { AxiosResponse } from 'axios'

interface Response {
  status: string
  message: string
  data: {
    accessToken: string
    refreshToken: string
    memberId: number
  }
}

// {
//     ”phone” : 010xxxxxxxx,
//     ”password”:
//     }
export const passwordAxios = async (
  phone: string,
  password: string,
): Promise<Response> => {
  try {
    const requestData = {
      phone: phone,
      password: password,
    }
    const res: AxiosResponse = await axios.post(
      `http://192.168.30.130:9000/api/members/login`,
      requestData,
    )
    if (!res || res.status !== 200) {
      throw new Error('에러')
    }
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
