import prismaClient from "../../prisma";

interface Object{
    pgmid: string;
    obj: string;
    objname: string;
    task_num: string;
}
class GetObjectService{
    async execute({ pgmid }: Object){

        const findByObject = await prismaClient.object.findMany({
            where:{
                pgmid: pgmid
            }
        })

        return findByObject;
    }
}

export { GetObjectService }