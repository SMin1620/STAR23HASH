import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

const axiosInstance = axios.create({
  withCredentials: true,
})

export const registAxios = async (
  phone: string,
  password: string,
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/members/register`,
      {
        phone: phone,
        password: password,
      },
    )

    return res
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
