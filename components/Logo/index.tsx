import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="mb-16 pt-24">
      <div className="ml-24 flex items-center gap-x-3">
        <Image
          width={24}
          height={24}
          src="/logo/coin-privy.png"
          alt="main-logo"
        />
        <p className="font-logo text-base font-bold tracking-widest text-primary">
          COINPRIVY
        </p>
      </div>
    </div>
  )
}

export default Logo
