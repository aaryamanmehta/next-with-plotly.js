import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPlot = dynamic(import('./plot'), {
  ssr: false
})

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Next Plotly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
      <DynamicPlot />
    </React.Fragment>
  )
}