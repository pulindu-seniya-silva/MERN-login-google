'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {FcGoogle} from 'react-icons/fc'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.replace('/homePage')
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <h2 className={styles.subtitle}>Login with Google</h2>

        <button 
          className={styles.loginButton} 
          onClick={() => signIn('google')}
        >
          <FcGoogle className={styles.googleIcon} /> 
          Login with Google
        </button>
      </div>
    </div>
  )
}
