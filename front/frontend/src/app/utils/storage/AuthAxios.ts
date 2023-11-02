import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
})

export const setAuthToken = (token: string): void => {
  localStorage.setItem('token', token)
}

const getAuthToken = (): string | null => {
  return localStorage.getItem('token')
}

const AuthAxios = async (config: AxiosRequestConfig): Promise<any> => {
  console.log(config)

  const token = getAuthToken()
  const headers = {
    ...config.headers,
    Authorization: token,
  }

  config.headers = headers

  try {
    const response = await api(config)
    return response
  } catch (error: any) {
    // if (error.response?.status === 403 || error.response?.status === 401) {
    // try {
    //   const reissueResponse = await axios.post(
    //     `${process.env.REACT_APP_BASE_URL}/api/v1/auth/reissue`,
    //     {},
    //     {
    //       withCredentials: true,
    //     },
    //   )

    //   console.log('재발급 완료')
    //   console.log(localStorage.getItem('token'))

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
