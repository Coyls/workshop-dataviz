import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header/header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />

    </div>
  )
}
