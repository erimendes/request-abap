import prismaClient from "../../prisma";

interface ObjectRequest{
    pgmid: string;
}

class DelObjectService {
    async execute({pgmid}: ObjectRequest) {

        const delObject = await prismaClient.object.deleteMany({
            where:{
                pgmid: pgmid
            }
        })

        return delObject;
    }
}

export { DelObjectService }