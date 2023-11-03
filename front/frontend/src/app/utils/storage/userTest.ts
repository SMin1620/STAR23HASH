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

const setLocalStorageValue = (key: string, value: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, `Bearer ${value}`)
  }
}

const getLocalStorageValue = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key)
    console.log('token : ', storedValue)

    return storedValue ? JSON.parse(storedValue) : null
  }
  return null
}

export const userTest = async (): Promise<AxiosResponse> => {
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
    setLocalStorageValue('token', res.data.data.accessToken)
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
