import React from 'react'

import Logo from 'components/Logo'

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-2/5 bg-surface-secondary">
        <Logo />
        <div className="ml-32">
          <h1 className="mb-4 font-primary text-[32px] leading-9 text-primary">
            Welcome to <br /> Coinprivy
          </h1>
          <p className="font-secondary text-secondary">
            is a secure platform that makes it easy to buy, <br /> sell, and
            store cryptocurrency like Bitcoin, <br /> Ethereum, and more. Based
            in the USA
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
