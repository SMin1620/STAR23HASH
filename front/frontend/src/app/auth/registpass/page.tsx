'use client'
import * as r from './registpass.styled'
import LoginComponent from '@/component/Three/login'

export default function RegistPass() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div
            style={{ marginTop: '790px' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="pb-10 text-4xl text-white">별이삼샵</div>
            {/* <div className="mb-9">
              <img src="/assets/Astronaut-4.png" style={{ width: '230px' }} />
            </div> */}
            <div className="text-4xl text-white"></div>
            <r.inputStyle
              placeholder="비밀번호를 입력해주세요"
              name="phone"
              type="password"
              // value={}
              // onChange={(e) => setInputValue(e.target.value)}
            ></r.inputStyle>
            <r.inputStyle
              placeholder="비밀번호를 확인해주세요"
              name="phone"
              type="password"
              // value={}
              // onChange={(e) => setInputValue(e.target.value)}
            ></r.inputStyle>
            <r.Button>확인</r.Button>
          </div>
        </div>
      </div>
      <LoginComponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
