import Image from 'next/image'
import Completion from './components/Completion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Completion />
    </main>
  )
}
