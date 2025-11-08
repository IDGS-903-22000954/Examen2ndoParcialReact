import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'

const LayoutPublic = () => {
    const navigation = useNavigation();

  return (
    <>
        <Navbar />
        <main>
            {
                navigation.state === 'loading' && (
                    <div>Loading ....</div>
                )
            }
            <Outlet />
        </main>
    </>
  )
}

export default LayoutPublic
