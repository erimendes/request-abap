import prismaClient from "../../prisma";

interface Task{
    num: string
}

class ReleaseTaskService {
    async execute({num}: Task) {

        const taks = await prismaClient.task.updateMany({
            data:{
                num: num
            }
        })

        return taks;
    }
}

export { ReleaseTaskService }