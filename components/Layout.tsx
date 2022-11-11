
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

type Props ={
    children: React.ReactNode
}

export default function Layout({children}:Props) {
  return (
 <> 
   <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <title>PokeApi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>
   </Head>
    <Navbar/>
    <main className='MainContainer'>{children}</main>
    <Footer/>   
 </>
  )
}
