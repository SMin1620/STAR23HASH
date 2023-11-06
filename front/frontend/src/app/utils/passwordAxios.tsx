import axios, { AxiosResponse, AxiosError } from 'axios'

const DOMAIN = process.env.NEXT_PUBLIC_TEST2

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

export const passwordAxios = async (
  phone: string,
  password: string,
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      `${DOMAIN}/api/members/login`,
      // `http://192.168.30.130:9000/api/members/login`,
      {
        phone: phone,
        password: password,
      },
    )
    console.log(res)
    if (!res || res.status !== 200) {
      throw new Error('에러')
    } else {
      // setLocalStorageValue('token', res.data.data.accessToken)
      setCookieValue('accessToken', `Bearer ${res.data.data.accessToken}`)
      return res
    }
  } catch (error) {
    console.log(error)

    throw new Error('네트워크 오류')
  }
}
