import prismaClient from "../../prisma";

interface Object{
    pgmid: string;
}
class ListObjectService{
    async execute({ pgmid }: Object){

        const findAllObject = await prismaClient.object.findMany({
            where:{
                pgmid: pgmid
            }
        })

        return findAllObject;
    }
}

export { ListObjectService }