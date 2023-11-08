'use client'
import Logincomponent from '../../../component/Three/login'
import LoginAstronaut from '../../../component/Three/loginAstronaut'
import * as p from './loginpassword.styled'

export default function LoginPassword({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <p.ContentBox>
          <div className="flex flex-col items-center justify-center">
            <div className="pb-5 text-4xl text-white">별이삼샵</div>
            <p.AstronauntDiv>
              <LoginAstronaut style={{ width: '100%', height: '100%' }} />
            </p.AstronauntDiv>
            {children}
          </div>
        </p.ContentBox>
      </div>
      <Logincomponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
