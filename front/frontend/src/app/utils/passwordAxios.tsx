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
      // 기본 쿠키 옵션들 (추가 옵션을 필요에 맞게 설정할 수 있습니다)
      expires: new Date(
        name === 'refreshToken'
          ? Date.now() + 2 * 60 * 60 * 1000
          : Date.now() + 30 * 60 * 1000,
      ), // 만료 기간: 7일 (예시)
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

export const passwordAxios = async (
  phone: string,
  password: string,
): Promise<any> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/members/login`,
      // `http://192.168.30.130:9000/api/members/login`,
      {
        phone: phone,
        password: password,
      },
    )
    // console.log(res)
    setCookieValue('accessToken', `Bearer ${res.data.data.accessToken}`)
    setCookieValue('refreshToken', `Bearer ${res.data.data.refreshToken}`)
    // if (!res || res.status !== 200) {
    //   throw new Error('에러')
    // } else {
    //   setLocalStorageValue('token', res.data.data.accessToken)
    //   return res
    // }
    return res
  } catch (error) {
    // console.error(error)
  }
}
