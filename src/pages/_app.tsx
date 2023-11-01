import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#E8B20E',
          colorText: '#2e1c2f',
          fontFamily: 'Roboto Condensed, sans-serif',
          fontSize: 16,
          borderRadius: 8,
          boxShadowSecondary: 'none',
        },
        components: {
          Pagination: {
            itemActiveBg: '#e3b6be',
          },
          Select: {
            optionSelectedBg: 'rgba(0, 0, 0, 0.04)',
            optionSelectedFontWeight: 400,
          }
        }
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
