import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
  withCredentials: true,
})

export const sendSmsAxios = async (phone: string): Promise<any> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/sms/sends`,
      {
        phone: phone,
      },
    )
    // if (!res || res.status !== 200) {
    //   throw new Error('에러')
    // }

    return res
  } catch (error) {
    // throw new Error('네트워크 오류')
  }
}
