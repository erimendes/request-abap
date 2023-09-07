import prismaClient from "../../prisma";

interface Request{
    num: string;
}

class DelRequestService {
    async execute({num}: Request) {

        const delRequest = await prismaClient.request.deleteMany({
            where:{
                num: num
            }
        })

        return delRequest;
    }
}

export { DelRequestService }