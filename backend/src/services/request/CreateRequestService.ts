import prismaClient from "../../prisma";

interface Request{
    num: string;
    desc: string;
    dest: string;
    type: string;
    project: string;
    user: string
}

class CreateRequestService {
    async execute({num, desc, dest, type, project, user}: Request) {

        const object = await prismaClient.request.create({
            data:{
                num: num,
                desc: desc,
                dest: dest,
                type: type,
                project: project,
                user: user
            },
            select:{
                num: true,
                desc: true,
                dest: true,
                type: true,
                project: true,
                user: true
            }
        })

        return object;
    }
}

export { CreateRequestService }