import React from 'react'

const Search = () => {
  return (
    <div></div>
  )
}

export const getServerSideProps = async ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`);
  
    return {
      props: { data: res.data },
    };
  };

export default Search