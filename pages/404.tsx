import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import Logo from 'public/logo.png'

export default function PageNotFound() {
  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 md:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link href="/">
              <a className="inline-flex">
                <span className="sr-only">Kemdikbud Logo</span>
                <Image className="h-12 w-auto" src={Logo} alt="" />
              </a>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Halaman tidak ditemukan
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Halaman yang Kamu cari tidak ditemukan. Coba periksa URL yang
                Kamu masukkan.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-primary hover:text-primary/70">
                    Kembali ke beranda<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
