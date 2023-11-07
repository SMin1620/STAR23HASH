import { AxiosResponse } from 'axios'
import AuthAxios from '../../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

const LinkListGet = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/rolls/`,
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default LinkListGet
