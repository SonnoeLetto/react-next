import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
export default function Home() {
  return (
      <MainLayout>
          <Head>
              <title>Next.js traning</title>
          </Head>
        <h1>Hello</h1>
          <Link href={'/about'}>About</Link>
          <Link href={'/posts'}>Posts</Link>
      </MainLayout>

  )
}
