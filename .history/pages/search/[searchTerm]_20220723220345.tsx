import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../utils';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { useRouter } from 'next/router';
import useAuthStore from '../../store/authStore';
import { IUser, Video } from '../../types';
import NoResults from '../../components/NoResults';
import VideoCard from '../../components/VideoCard';

const Search = ( {videos}: { videos: Video[] }) => {
    const [isAccounts, setIsAccounts] = useState(false)

    const Accounts = isAccounts ? 'border-b-2 border-black' : 'text-gray-400'
    const isVidoes = !isAccounts ? 'border-b-2 border-black' : 'text-gray-400'
  
  return (
    <div className='w-full'>
                <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
         <p className={`text-xl font-semibold cursor-pointer mt-2 ${accounts}`} onClick={ () => setIsAccounts(true)}>Videos</p>
         <p className={`text-xl font-semibold cursor-pointer mt-2 ${videos}`} onClick={ () => setIsAccounts(false)}>Liked</p>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({
    params: { searchTerm },
  }: {
    params: { searchTerm: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${searchTerm}`);
  
    return {
      props: { videos: res.data },
    };
  };

export default Search