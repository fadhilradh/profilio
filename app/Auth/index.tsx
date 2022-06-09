import React from 'react'

import CurrentDate from 'components/CurrentDate'
import MainView from 'components/Layout/MainView'
import Sidebar from 'components/Layout/Sidebar'

import Login from './Login'

const AuthApp = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)

  const tabsData = [
    {
      label: 'Login',
      content: <Login />,
    },
    {
      label: 'Registration',
      content:
        'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
    },
  ]
  return (
    <div className="flex">
      <Sidebar />
      <MainView classes="p-24">
        <>
          <CurrentDate />
          <div className="mt-11 flex gap-x-10 border-b border-stroke-primary">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  className={`border-b-2  py-2 px-4 font-primary transition-colors duration-300 ${
                    idx === activeTabIndex
                      ? 'border-accent text-primary'
                      : 'border-transparent  text-tertiary hover:border-gray-200'
                  }`}
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="mt-16 mb-24">
            <p>{tabsData[activeTabIndex].content}</p>
          </div>
        </>
      </MainView>
    </div>
  )
}

export default AuthApp
