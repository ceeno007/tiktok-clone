import type { NextPage } from 'next'
import axios from 'axios';
import { Video } from '../types'
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';
interface Iprops { 
  videos: Video[]
}

const Home = ({ videos }: Iprops) => {
  return (
    <h1 className ="flex flex-col gap-10 videos h-full">
    {videos.length ? (
      videos.map((video: Video) => (
        <VideoCard post={video} key={video._id}/>
      ))
    ) : (
      <NoResults text={'No Videos'}/>
    )}
    </h1>
  )
}

export const getServerSideProps = async ({
  query: { topic } 
}:{
  query: { topic: string }
}) => {
  if(topic){
    let r
    const { data } = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    const { data } = await axios.get(`${BASE_URL}/api/post`);
  }


  return {
    props: {
      
      videos: data}
  }
}
export default Home