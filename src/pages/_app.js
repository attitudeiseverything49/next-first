import "@/styles/globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} /> 
    <GoogleTagManager gtmId="GTM-KWP98NS8"/>
    </>
}
