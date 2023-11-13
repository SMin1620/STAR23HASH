import { AxiosResponse } from 'axios'
import AuthAxios from '../../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

export const randomDetailGet = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/notes/${id}`,
    })

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}
