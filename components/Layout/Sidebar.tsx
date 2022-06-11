import React from 'react'

import Logo from 'components/Logo'

const Sidebar = () => {
  return (
    <>
      <div className="w-full bg-surface-secondary py-10 md:h-screen md:w-5/12 md:py-24 xl:w-3/12">
        <Logo />
        <div className="mt-16 px-3 text-center md:pl-32 md:pr-10 md:text-left">
          <h1 className="mb-4 text-[32px] leading-9 text-primary">
            Welcome to <br /> Coinprivy
          </h1>
          <p className="font-secondary text-secondary">
            it is a secure platform that makes it easy to buy, <br /> sell, and
            store cryptocurrency like Bitcoin, <br /> Ethereum, and more. Based
            in the USA.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
