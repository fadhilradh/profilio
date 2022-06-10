import React from 'react'

import { Button } from 'components/Button'

const Registration = () => {
  return (
    <div>
      <form className="rounded-lg border border-stroke-primary p-8">
        <h3 className="!font-semibold text-primary">Create New Account</h3>
        <p className="mb-8 text-xs text-secondary">
          Before you can invest here, please create new account
        </p>
        <h3 className="mb-2 font-semibold leading-none text-primary">
          Account Detail
        </h3>
        <div className="mb-6">
          <label className="mb-2 text-[13px] text-primary" htmlFor="country">
            Select Country
          </label>
          <select name="phone" className="base-select">
            <option value="">Tes</option>
          </select>
        </div>
        <div>
          <label className="mb-2 text-[13px] text-primary" htmlFor="phone">
            Phone Number
          </label>
          <input name="phone" type="phone" className="base-input" />
        </div>
        <div className="!mt-6">
          <label className="mb-2 text-[13px] text-primary" htmlFor="password">
            Password
          </label>
          <input name="password" type="password" className="base-input" />
        </div>
      </form>

      <div className="mt-9   ">
        <a href="#" className="font-secondary text-accent">
          Terms and Conditions
        </a>
      </div>

      <div className="mt-24 flex gap-x-4">
        <Button>Reset</Button>
        <Button variant="primary">Login</Button>
      </div>
    </div>
  )
}

export default Registration
