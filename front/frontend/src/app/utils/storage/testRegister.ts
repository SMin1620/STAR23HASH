import axios, { AxiosResponse } from 'axios'

interface ResponseData {
  status: string
  message: string
  data: Data
}

interface Data {
  accessToken: string
  refreshToken: string
  memberId: number
}

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
      // 기본 쿠키 옵션들 (추가 옵션을 필요에 맞게 설정할 수 있습니다)
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 만료 기간: 7일 (예시)
      path: '/', // 쿠키의 경로
      sameSite: 'strict', // 동일 출처 정책
      // secure: process.env.NODE_ENV === 'production', // HTTPS에서만 쿠키 전송
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

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || ''

const testRegister = async (): Promise<any> => {
  console.log(DOMAIN)

  try {
    const response: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/members/register`,
      {
        phone: '6',
        password: '6',
      },
    )

    if (!response || response.status !== 200) {
      throw new Error('에러')
    }

    setCookieValue('accessToken', `Bearer ${response.data.data.accessToken}`)
    const accessToken = getCookieValue('accessToken')
    console.log('Access Token:', accessToken)

    console.log(response)

    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('네트워크 오류')
  }
}

export default testRegister
