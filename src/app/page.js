"use client";
import Image from 'next/image'
import Playground from '../components/playground';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col justify-between p-24">
      <Playground />
    </main>
  )
}
