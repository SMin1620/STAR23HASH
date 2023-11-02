import axios, { AxiosResponse } from 'axios'

interface Response {
  status: string
  message: string
  data: Data
}

interface Data {
  accessToken: string
  refreshToken: string
  memberId: number
}

const DOMAIN = process.env.NEXT_PUBLIC_TEST2

const axiosInstance = axios.create({
  withCredentials: true,
})

export const userTest = async (): Promise<Response> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/members/login`,
      {
        phone: '1234',
        password: '1234',
      },
    )

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }

    console.log(res)

    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
