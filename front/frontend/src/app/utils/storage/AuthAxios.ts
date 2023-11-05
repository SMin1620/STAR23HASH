import axios, { AxiosRequestConfig, AxiosError } from 'axios'

const api = axios.create({
  withCredentials: true,
})

// setCookie 없음
// export const setAuthToken = (token: string): void => {
//   localStorage.setItem('accessToken', token)
// }

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
  console.log('accessToken is : ', accessToken)

  const headers = {
    ...config.headers,
    Authorization: accessToken,
  }

  config.headers = headers

  try {
    const response = await api(config)
    return response
  } catch (error: AxiosError) {
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

    console.log(error.response)
  }
}

export default AuthAxios
