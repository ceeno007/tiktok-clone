import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go'

import useAuthStore from '../store/authStore'

const SuggestedAccounts = () => {
  const { fetchAllUsers, allUsers } = useAuthStore()

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAll])
  return (
    <div>SuggestedAccounts</div>
  )
}

export default SuggestedAccounts