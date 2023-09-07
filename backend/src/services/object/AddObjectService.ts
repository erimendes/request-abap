import prismaClient from "../../prisma";

interface ObjectRequest{
    pgmid: string;
    obj: string;
    objname: string;
    task_num: string;
}

class AddObjectService {
    async execute({pgmid, obj, objname, task_num}: ObjectRequest) {

        const object = await prismaClient.object.create({
            data:{
                pgmid: pgmid,
                obj: obj,
                objname: objname,
                task_num: task_num
            },
            select:{
                pgmid: true,
                obj: true,
                objname: true,
                task_num: true
            }
        })

        return object;
    }
}

export { AddObjectService }