// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { postDetailQuery } from '../../../utils/queries';



export default async function handler(req: NextApiRequest,res: NextApiResponse
) {
  if(req.method == 'GET') {
    const { id} = req.query;
const query = postDetailQuery(id);

const data = await client.fetch(query)

res.status(200).json(data[0]);
} else if (req.method === 'PUT') {
  const { comment, userId } = req.body;
  const { id }:any = req.query;

  const data = 
  like ? await client
  .patch(postId)
  .setIfMissing({ like: []})
  .insert('after', 'likes[-1]', [
      {
      _key: uuid(),
      _ref: userId
      }
  ])
  .commit()
}
 

}
