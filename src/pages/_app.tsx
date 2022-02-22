import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
      <meta charSet="utf-8"/>
      <meta name="description" content="Personal website template made by Voltages"/>
      <meta name="author" content="v4ltages"/>
      <meta name="keywords" content="template, personal, website, add, more, here"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="theme-color" content="#000000"/>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
