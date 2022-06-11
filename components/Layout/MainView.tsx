import clsx from 'clsx'
import React from 'react'

interface PageProps {
  children: React.ReactElement
  classes?: string
}

const MainView = ({ children, classes }: PageProps) => {
  return (
    <div
      className={clsx(
        'h-screen w-full overflow-auto bg-surface-primary md:w-7/12 xl:w-9/12',
        classes
      )}
    >
      {children}
    </div>
  )
}

export default MainView
