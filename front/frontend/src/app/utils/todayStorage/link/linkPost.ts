import { AxiosResponse } from 'axios'
import api from '../../api'

export const linkPost = async (
  content: string,
  icon: number,
  rollId: number,
): Promise<AxiosResponse> => {
  try {
    const response = await api({
      method: 'post',
      url: `/rolls`,
      data: {
        content: content,
        icon: icon,
        rollId: rollId,
      },
    })
    if (!response || response.status !== 200) {
      throw new Error('에러')
    }
    return response
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
