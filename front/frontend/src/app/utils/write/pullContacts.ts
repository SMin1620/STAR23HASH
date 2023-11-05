import axios, { AxiosResponse } from 'axios'
import AuthAxios from '../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const pullContacts = async (
  contacts: string,
): Promise<AxiosResponse> => {
  console.log(contacts)
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/letters/contact`,
      data: { contacts: contacts },
    })

    // if (!res || res.status !== 200) {
    //   throw new Error('에러')
    // }
    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
