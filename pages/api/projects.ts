import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    request: NextApiRequest,
    res: NextApiResponse,
) {
    if (request.method === "POST") {
        console.log({ requestBody: request.body })
        const project = await prisma.project.create({
            data: {
                ...request.body,
                active: request.body === "on" ? true : false,
            },
        });
        return res.status(200).send(project);

    } else if (request.method === "GET") {
        const items = await prisma.project.findMany({});
        return res.status(200).send(items);
    }
}
