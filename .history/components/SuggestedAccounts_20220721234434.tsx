import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go'

import useAuthStore from '../store/authStore'

const SuggestedAccounts = () => {
  const { fetchAllUsers, allUsers } = useAuthStore()

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);
  return (
    <div className='xl:border-b-2 border-gray-200 pb-4'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>Suggested Account</p>

      <div>
        {allUsers.slice(0, 6).map((user) => (
          <Link href={`/profile/`}>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SuggestedAccounts