import React from 'react'

import MainView from 'components/Layout/MainView'
import Sidebar from 'components/Layout/Sidebar'

const ProfileApp = () => {
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
          </main>
        </>
      </MainView>
    </div>
  )
}

export default ProfileApp
