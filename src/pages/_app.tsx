import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationMenu from '@/components/navigationMenu'
import { ExampleProvider } from '../context/exampleContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '10%', border: '2px solid black'}}>
        <NavigationMenu/>
      </div>
      <div style={{ width: '90%'}}>
        <ExampleProvider>
          <Component {...pageProps} />
        </ExampleProvider>
      </div>
    </div>
    
  )
}
