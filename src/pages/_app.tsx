import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationMenu from '@/components/navigationMenu'
import { ExampleProvider } from '../context/exampleContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%' }}>
        <NavigationMenu/>
      </div>
      <div style={{ width: '100%'}}>
        <ExampleProvider>
          <Component {...pageProps} />
        </ExampleProvider>
      </div>
    </div>
    
  )
}
