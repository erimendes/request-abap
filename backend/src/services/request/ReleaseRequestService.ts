import prismaClient from "../../prisma";

interface Request{
    num: string
}

class ReleaseRequestService {
    async execute({num}: Request) {

        const object = await prismaClient.request.updateMany({
            data:{
                num: num
            }
        })

        return object;
    }
}

export { ReleaseRequestService }