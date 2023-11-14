import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
  withCredentials: true,
})

export const confirmsSmsAxios = async (
  phone: string,
  certificationNumber: string,
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/sms/confirms`,
      {
        phone: phone,
        certificationNumber: certificationNumber,
      },
    )
    if (!res || res.status !== 200) {
      throw new Error('에러')
    }

    return res
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
