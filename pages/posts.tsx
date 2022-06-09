import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

import { Button } from '@wartek-id/button'

import type { Post } from 'typings/article'

export const getServerSideProps = async function () {
  const res = await fetch('https://api.hnpwa.com/v0/news/1.json')
  const data = await res.json()

  return {
    props: {
      data: data as [Post],
    },
  }
}

const About = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-gray-5 container m-auto max-w-2xl">
      <Link href="/" passHref>
        <Button>Back</Button>
      </Link>
      <ul className="bg-gray-5 p-4">
        {data.map((post) => (
          <Link key={post.id} passHref href={post.url}>
            <li className="flex flex-col rounded-lg p-2 hover:shadow-lg">
              <span>
                {post.title} ({post.domain})
              </span>
              <span className="text-sm text-gray-400">
                {post.points} points by <strong>{post.user}</strong>{' '}
                {post.time_ago} | {post.comments_count} comments
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default About
