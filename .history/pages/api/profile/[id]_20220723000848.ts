import { singleUserQuery } from './../../../utils/queries';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { singleUserQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';



export default async function handler(req: NextApiRequest,res: NextApiResponse
) {
  if(req.method == 'GET') {
    const { id } = req.query;
     
    const query = singleUserQuery(id)

    const user = await client.fetch(query)
  }
}
