import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../utils';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { userRouter } from 'next/router';
import useAuthStore from '../../store/authStore';
import { IUser, Video } from '../../types';
import NoResults from '../../components/NoResults';

const Search = () => {
  return (
    <div></div>
  )
}

export const getServerSideProps = async ({
    params: { searchTerm },
  }: {
    params: { searchTerm: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${searchTerm}`);
  
    return {
      props: { data: res.data },
    };
  };

export default Search