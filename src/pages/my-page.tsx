import React from 'react'
import { UseAuth } from '../../context/auth';
import { useRouter } from 'next/router';

const myPage = () => {
    const { isLoading, isLoggedIn } = UseAuth();
    const router = useRouter();

  if(isLoading){
    return null
  }

  if(!isLoggedIn){
    router.push("/") // If already logged in, redirect to home
    return null
  }

  return (
    <div>myPage</div>
  )
}

export default myPage