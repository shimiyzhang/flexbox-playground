import Head from 'next/head'
import FlexBox from '@/components/FlexBox'
import Menu from '@/components/Menu'
import { FlexboxProvider } from '@/context/FlexboxContext'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flexbox Playground</title>
      </Head>
      <main className="flex h-screen w-screen items-center justify-between bg-gray-100">
        <FlexboxProvider>
          <section className="h-full w-3/4">
            <FlexBox />
          </section>
          <menu className="h-full w-1/4 border-l border-gray-300 bg-white">
            <Menu />
          </menu>
        </FlexboxProvider>
      </main>
    </>
  )
}
