import prismaClient from "../../prisma";

interface Object{
    pgmid: string
}

class UnlockObjectService {
    async execute({pgmid}: Object) {

        const object = await prismaClient.object.updateMany({
            data:{
                pgmid: pgmid
            }
        })

        return object;
    }
}

export { UnlockObjectService }