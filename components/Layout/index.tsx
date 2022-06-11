import React from 'react'

const Layout = ({ children }) => {
  return <div className="flex flex-col md:flex-row">{children}</div>
}

export default Layout
