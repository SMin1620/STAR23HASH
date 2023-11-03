import axios, { AxiosResponse, AxiosError } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_TEST

const axiosInstance = axios.create({
  withCredentials: true,
})

const setLocalStorageValue = (key: string, value: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, `Bearer ${value}`)
  }
}

// interface Response {
//   status: string
//   message: string
//   data: {
//     accessToken: string
//     refreshToken: string
//     memberId: number
//   }
// }

export const passwordAxios = async (
  phone: string,
  password: string,
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      // `${DOMAIN}/api/members/login`,
      `http://192.168.30.130:9000/api/members/login`,
      {
        phone: phone,
        password: password,
      },
    )
    console.log(res)
    if (!res || res.status !== 200) {
      throw new Error('에러')
    } else {
      setLocalStorageValue('token', res.data.data.accessToken)
      return res
    }
  } catch (error) {
    console.log(error)

    throw new Error('네트워크 오류')
  }
}
