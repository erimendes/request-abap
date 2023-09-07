import prismaClient from "../../prisma";

interface Request{
    num: string
    //desc: string;
    //dest: string;
    //type: string;
    //project: string;
   // user: string
}
class FindRequestService{
    async execute({ num }: Request){

        const findByRequest = await prismaClient.request.findMany({
            where:{
                num: num
            }
        })

        return findByRequest;
    }
}

export { FindRequestService }