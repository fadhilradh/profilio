import Image from 'next/image'
import React from 'react'

import { Button } from 'components/Button'
import CurrentDate from 'components/CurrentDate'
import MainView from 'components/Layout/MainView'
import Sidebar from 'components/Layout/Sidebar'
import OTPInput from 'components/OTPInput'

export function OTPApp() {
  return (
    <div className="flex">
      <Sidebar />
      <MainView classes="p-24">
        <>
          <CurrentDate />
          <div className="mt-16 mb-9 rounded-lg border border-stroke-primary p-8">
            <h3 className="text-primary">OTP Verification</h3>
            <p className="mb-8 text-xs text-secondary">
              Insert OTP code sent to your phone
            </p>
            <div className="flex items-center gap-x-3  ">
              <OTPInput />
              <Button>Verify</Button>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <Image
              src="/icon/reload.png"
              width={20}
              height={20}
              alt="Resend OTP"
            />
            <p className="text-accent">Resend OTP Code</p>
          </div>
        </>
      </MainView>
    </div>
  )
}
export default OTPApp
