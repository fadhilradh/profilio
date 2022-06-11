import React from 'react'

import MainView from 'components/Layout/MainView'
import Sidebar from 'components/Layout/Sidebar'

import Career from './Career'
import Education from './Education'
import Gallery from './Gallery'
import Information from './Information'

const ProfileApp = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)

  const tabsData = [
    {
      label: 'Information',
      content: <Information />,
    },
    {
      label: 'Career',
      content: <Career />,
    },
    {
      label: 'Education',
      content: <Education />,
    },
    {
      label: 'Gallery',
      content: <Gallery />,
    },
  ]

  return (
    <div className="flex">
      <Sidebar />
      <MainView>
        <>
          <div
            className="mb-4 flex items-center justify-end px-24"
            style={{
              backgroundImage: 'url(/image/cover.png)',
              width: '100%',
              height: '293px',
            }}
          >
            <button className="rounded-xl border-none bg-white bg-opacity-30 px-2 py-1 text-xs text-white">
              Change Cover
            </button>
          </div>
          <main className="mx-auto -mt-32 w-[80%] rounded-xl bg-surface-primary p-8">
            <section className="mb-20">
              <h1 className="text-3xl text-primary">Wong Fei Hung</h1>
              <p className="text-[14px] text-secondary">Level 1 - #SG769891</p>
            </section>

            <div className="mt-11 flex gap-x-8 border-b border-stroke-primary">
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
          </main>
        </>
      </MainView>
    </div>
  )
}

export default ProfileApp
