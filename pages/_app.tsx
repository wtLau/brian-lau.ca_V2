import 'styles/global.css'

import { MDXProvider } from '@mdx-js/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

import MDXComponents from '@components/blog/BlogContent'
import { ThemeCustomProvider, Head } from '@components/common'
import themeConfig from '@components/common/Theme/config'
import AppLayout from '@components/layout/AppLayout'
import * as gtag from '@lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const theme = themeConfig

  useEffect(() => {
    document.body.classList?.remove('loading')

    // Google Analytics tacking page view s and events
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head />
      <ThemeCustomProvider theme={theme}>
        <CssBaseline />
        <AppLayout>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </AppLayout>
      </ThemeCustomProvider>
    </>
  )
}

export default MyApp
