import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import axios from 'axios';

import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { IUser, Video } from '../../types'
import { BASE_URL } from '../../utils'

interface IProps {
    data: {
        user: IUser,
        userVideos: Video[],
        userLikedVideos: Video[]
    }
}

const Profile = ({data}: IProps) => {
    return (
        <div className='w-full'>
            <div className='flex gap-6 ,d:gap-10 mb-4'>

            </div>

        </div>
    )
}


export const getServerSideProps = async ({ 
    params: { 
    id }
}: {
    params: { id: string }
}) => {
     const res = await axios.get (`${BASE_URL}/api/profile/${id}`)

     return {
        props: { data: res.data}
     }
}

export default Profile