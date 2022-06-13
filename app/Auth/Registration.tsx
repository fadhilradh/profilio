import axios from 'axios'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

import { getMobileOperatingSystem } from 'utils/getDeviceType'

import { Button } from 'components/Button'

interface LatLong {
  lat: number
  long: number
}

const Registration = () => {
  const [latlong, setLatlong] = React.useState<LatLong>({
    lat: null,
    long: null,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      setLatlong({ lat, long })
    })
  }, [])

  async function registerUser(formData) {
    const requestForm = {
      ...formData,
      latlong: latlong.lat.toString() + latlong.long.toString(),
      device_token: btoa(Math.random() + navigator.userAgent + Date()),
      device_type: getMobileOperatingSystem(),
    }
    try {
      const response = await axios.post(
        'http://pretest-qa.dcidev.id/api/v1/register',
        requestForm
      )
      alert(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="rounded-lg border border-stroke-primary p-8">
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
            <select
              name="phone"
              {...register('country')}
              className="base-select"
            >
              <option value="id" className="text-black">
                +62 (Indonesia)
              </option>
              <option value="my" className="text-gray-300" disabled>
                +60 (Malaysia)
              </option>
            </select>
          </div>
          <div>
            <label className="mb-2 text-[13px] text-primary" htmlFor="phone">
              Phone Number
            </label>
            <input
              {...register('phone', { required: true })}
              name="phone"
              type="phone"
              className={clsx('base-input', errors.phone && 'border-red-500')}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">Phone number is required</p>
            )}
          </div>
          <div className="!mt-6">
            <label className="mb-2 text-[13px] text-primary" htmlFor="password">
              Password
            </label>
            <input
              {...register('password', { required: true })}
              name="password"
              type="password"
              className={clsx(
                'base-input',
                errors.password && 'border-red-500'
              )}
            />
            {errors.password && (
              <p className="text-sm text-red-500">Password is required</p>
            )}{' '}
          </div>
        </div>

        <div className="mt-9 flex items-center gap-x-2">
          <Image
            src="/icon/download.png"
            width={24}
            height={16}
            alt="Download"
          />
          <a href="#" className="font-secondary text-accent">
            Terms and Conditions
          </a>
        </div>

        <div className="mt-24 flex gap-x-4">
          <Button>Reset</Button>
          <Button variant="primary">Register</Button>
        </div>
      </form>
    </>
  )
}
export default Registration
