import { AxiosResponse } from 'axios'
import AuthAxios from '../../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const randomDetailGet = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/notes/${id}`,
    })
  } catch (error) {
    console.error(error)
  }
}
