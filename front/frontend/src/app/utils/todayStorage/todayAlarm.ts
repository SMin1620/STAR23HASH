import AuthAxios from '../storage/AuthAxios'
import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const TodayAlarm = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/members/alarm`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    // throw new Error('네트워크 오류')
  }
}
