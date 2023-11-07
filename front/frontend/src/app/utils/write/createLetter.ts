import axios, { AxiosResponse } from 'axios'
import AuthAxios from '../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const createLetter = async (
  content: string,
  type: number,
  fileUrl: string,
  hintContent: string,
  phone: string,
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/letters`,
      data: {
        content: content,
        type: type,
        fileUrl: fileUrl,
        hintContent: hintContent,
        phone: phone,
      },
    })

    if (!res || res.status !== 200) {
      throw new Error('에러')
    }
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
