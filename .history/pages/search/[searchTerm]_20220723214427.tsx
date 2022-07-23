import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../utils';
import Image from 'next/image'

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