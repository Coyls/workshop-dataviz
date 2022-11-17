import { Header } from '../components/Header/header'
import { ShittyPage } from '../components/Header/shittyPage'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <ShittyPage/>
    </div>
  )
}
