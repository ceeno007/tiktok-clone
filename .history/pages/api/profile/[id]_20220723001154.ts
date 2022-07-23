import type { NextApiRequest, NextApiResponse } from 'next'

import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';



export default async function handler(req: NextApiRequest,res: NextApiResponse
) {
  if(req.method == 'GET') {
    const { id } = req.query;
     
    const query = singleUserQuery(id)
    const userVideoQuery = userCreatedPostsQuery(id)
    const userLikedVieoQuery = userLikedPostsQuery(id)

    const user = await client.fetch(query)
    const userVideos = await client.fetch(userVideosQuery)

    res.status(200).json(user)
  }
}
