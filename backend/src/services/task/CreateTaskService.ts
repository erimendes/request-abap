import prismaClient from "../../prisma";

interface Task{
    num: string;
    desc: string;
    type: string;
    request_num: string;
}

class CreateTaskService {
    async execute({num, desc, type, request_num}: Task) {

        const object = await prismaClient.task.create({
            data:{
                num: num,
                desc: desc,
                type: type,
                request_num: request_num,
            },
            select:{
                num: true,
                desc: true,
                type: true,
                request_num: true,
            }
        })

        return object;
    }
}

export { CreateTaskService }