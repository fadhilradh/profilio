import clsx from 'clsx'
import React from 'react'

interface PageProps {
  children?: React.ReactElement
  classes?: string
}

const MainView = ({ children, classes }: PageProps) => {
  return (
    <div
      className={clsx(
        'h-screen w-3/5 overflow-auto bg-surface-primary',
        classes
      )}
    >
      {children}
    </div>
  )
}

export default MainView
