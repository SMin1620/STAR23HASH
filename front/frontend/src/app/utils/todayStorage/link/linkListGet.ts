import { AxiosResponse } from 'axios'
import AuthAxios from '../../storage/AuthAxios'
import Error from '@/app/error'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

const LinkListGet = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/rolls/${id}`,
    })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default LinkListGet
