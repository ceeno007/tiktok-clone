import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../utils';

const Search = () => {
  return (
    <div></div>
  )
}

export const getServerSideProps = async ({
    params: {  },
  }: {
    params: { id: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`);
  
    return {
      props: { data: res.data },
    };
  };

export default Search