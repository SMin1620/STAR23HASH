import axios, { AxiosResponse } from 'axios'
import AuthAxios from '../../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const linkPost = async (
  content: string,
  icon: number,
  rollsId: number,
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/rolls`,
      data: {
        content: content,
        icon: icon,
        rollsId: rollsId,
      },
    })
    if (!response || response.status !== 200) {
      throw new Error('에러')
    }
    return response.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
