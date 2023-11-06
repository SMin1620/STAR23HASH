// import TokenStore from '@/store/token'
import axios, { AxiosResponse } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || ''

const axiosInstance = axios.create({
  withCredentials: true,
})

const setCookieValue = (
  name: string,
  value: string,
  options: any = {},
): void => {
  if (typeof window !== 'undefined') {
    const cookieOptions = {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      path: '/',
      sameSite: 'strict',
      ...options,
    }

    document.cookie = `${name}=${value}; ${Object.keys(cookieOptions)
      .map((key) => `${key}=${cookieOptions[key]}`)
      .join('; ')}`
  }
}

const getCookieValue = (name: string): string | null => {
  if (typeof window !== 'undefined') {
    const cookieName = name + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieArray = decodedCookie.split(';')

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim()
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length)
      }
    }
  }
  return null
}

const userTest = async (): Promise<any> => {
  console.log(DOMAIN)

  try {
    const response: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/members/login`,
      {
        phone: '12',
        password: '12',
      },
    )

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }

    setCookieValue('accessToken', `Bearer ${response.data.data.accessToken}`)
    setCookieValue('refreshToken', `Bearer ${response.data.data.refreshToken}`)

    console.log(response)

    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('네트워크 오류')
  }
}

export default userTest
