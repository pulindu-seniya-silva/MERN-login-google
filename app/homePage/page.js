'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from '../page.module.css'
import { FcGoogle } from 'react-icons/fc'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  // Skip redirection if you're logged in
  if (session) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Welcome Back!</h1>
          <h2 className={styles.subtitle}>You are already logged in.</h2>

          {/* Button to log out for testing */}
          <button
            className={styles.loginButton}
            onClick={() => signOut()}
          >
            Log out
          </button>
        </div>
      </div>
    )
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
