import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';


import userAuthStore from '../store/authStore';
import NoResults from './NoResults';

interfaxe Iprops {
  isPostingComment: boolean,

}

const Comments = () => {
  const { userProfile} = userAuthStore()
 const comments = []
 const isPostingComment = false;

  return (
    <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] bordet-b-2 lg:pb-0 pb-[100px]'>
       <div className='overflow-scroll lg:h-[475px]'>
        {comments.length ? (
          <div>Videos</div>
        ) : (
          <NoResults text='No comments yet'/>
        )}
       </div>

       {userProfile && (
        <div className='absolute bottem-0 left-0 pb-6 px-2 md:px-10'>
           <form onSubmit={() => {}} className='flex gap-4'>
             <input
               value=''
               onChange={() => {}}
                placeholder='Add comment...'
                className='bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg'
              />
              <button className='text-md text-gray-400'
              onClick={() => {          }}>
                {isPostingComment ? 'commenting...' :
                'Comment'}
              </button>
           </form>
        </div>
       )}
    </div>
  )
}

export default Comments