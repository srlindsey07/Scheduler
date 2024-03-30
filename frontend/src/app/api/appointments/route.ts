// const API_BASE_URL: string = `${process.env.NEXT_PUBLIC_API_BASE_URL}/appointments`;

import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest, res: NextApiRequest) {
    console.log(req);
}