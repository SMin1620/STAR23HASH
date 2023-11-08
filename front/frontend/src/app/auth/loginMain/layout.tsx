'use client'
import Logincomponent from '../../../component/Three/login'
import LoginAstronaut from '../../../component/Three/loginAstronaut'
import Modal from '../../../component/login/modal'
import * as m from './loginMain.styled'

import React, { useState, useEffect, Suspense } from 'react'
import MakeLink from '@/component/main/makeLink'

export default function LoginMain({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <m.ContentBox>
          <div className="flex flex-col items-center justify-center">
            <div className="pb-5 text-4xl text-white">별이삼샵</div>
            <m.AstronauntDiv>
              <LoginAstronaut style={{ width: '100%', height: '100%' }} />
            </m.AstronauntDiv>
            {children}
          </div>
        </m.ContentBox>
      </div>
      <Logincomponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
