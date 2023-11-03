import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_TEST
const axiosInstance = axios.create({
  withCredentials: true,
})

export const createNote = async (content: string): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(`${DOMAIN}/api/notes`, {
      content: content,
    })

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }
    console.log(res)
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
