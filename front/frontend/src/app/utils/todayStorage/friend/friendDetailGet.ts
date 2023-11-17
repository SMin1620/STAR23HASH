import { AxiosResponse } from 'axios'
import AuthAxios from '../../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

export const friendDetailGet = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/letters/detail/${id}`,
    })
    return response
  } catch (error) {
    console.error(error)
  }
}
