import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header/header'
import { ShittyPage } from '../components/Header/shittyPage'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <ShittyPage />
    </div>
  )
}
