import { create } from 'zustand'

// 쿠키 설정 함수
function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

// 쿠키 가져오기 함수
function getCookie(name: string) {
  const cookieString = document.cookie
  const cookies = cookieString.split('; ')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=')
    if (cookie[0] === name) {
      return cookie[1]
    }
  }
  return null
}

interface TokenStore {
  token: string
  setToken: (newToken: string) => void
  clearToken: () => void
  getToken: () => string
}

const TokenStore = create<TokenStore>((set) => ({
  token: getCookie('accessToken') || '',

  setToken: (newToken) => {
    set({ token: newToken })
    setCookie('accessToken', newToken, 7)
  },

  clearToken: () => {
    set({ token: '' })
    setCookie('accessToken', '', -1)
  },
  getToken: () => {
    return getCookie('accessToken') || '' // 추가: getToken 함수 구현
  },
}))

export default TokenStore
