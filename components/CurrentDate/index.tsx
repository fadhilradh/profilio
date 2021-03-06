import dayjs from 'dayjs'
import React from 'react'

const CurrentDate = () => {
  const date = dayjs().format('MMM DD, YYYY')
  return <p className="text-sm text-secondary">Today {date}</p>
}

export default CurrentDate
