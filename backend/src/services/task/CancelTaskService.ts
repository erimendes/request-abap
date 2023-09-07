import prismaClient from "../../prisma";

interface Task{
    num: string
}

class CancelTaskService {
    async execute({num}: Task) {

        const task = await prismaClient.task.updateMany({
            data:{
                num: num
            }
        })

        return task;
    }
}

export { CancelTaskService }