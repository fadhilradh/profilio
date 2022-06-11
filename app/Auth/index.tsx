import React from 'react'

import CurrentDate from 'components/CurrentDate'
import Layout from 'components/Layout'
import MainView from 'components/Layout/MainView'
import Sidebar from 'components/Layout/Sidebar'

import Login from './Login'
import Registration from './Registration'

const AuthApp = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)

  const tabsData = [
    {
      label: 'Login',
      content: <Login />,
    },
    {
      label: 'Registration',
      content: <Registration />,
    },
  ]
  return (
    <Layout>
      <Sidebar />
      <MainView classes="p-8 md:p-24">
        <>
          <CurrentDate />
          <div className="mt-11 flex gap-x-10 border-b border-stroke-primary">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  className={`border-b-2  py-2 px-4 transition-colors duration-300 ${
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
    </Layout>
  )
}

export default AuthApp
