import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
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

const AuthAxios = async (config: AxiosRequestConfig): Promise<any> => {
  const accessToken = getCookieValue('accessToken')

  const headers = {
    ...config.headers,
    Authorization: accessToken,
  }

  config.headers = headers

  try {
    const response = await api(config)
    return response
  } catch (error) {
    // if (error.response?.status === 403 || error.response?.status === 401) {
    // try {
    //   const reissueResponse = await axios.post(
    //     `재요청 api 필요`,
    //     {},
    //     {
    //       withCredentials: true,
    //     },
    //   )

    //   console.log('재발급 완료')
    //   console.log(localStorage.getItem('accessToken'))

    //   const reissuedToken = reissueResponse.headers.authorization
    //   setAuthToken(reissuedToken)

    //   config.headers = {
    //     Authorization: reissuedToken,
    //   }

    //   const retryResponse = await api(config)

    //   return retryResponse
    // } catch (error) {
    //   console.log('재발급 실패', error)
    //   throw error
    // }
    //   console.log('안됨')
    // } else {
    //   console.log('재발급 시도조차 못함', error)
    //   throw error
    // }

    console.log(error)
  }
}

export default AuthAxios
