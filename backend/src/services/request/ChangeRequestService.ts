import prismaClient from "../../prisma";

interface Request{
    num: string;
    desc: string;
    dest: string;
    type: string;
    project: string;
    user: string
}

class ChangeRequestService {
    async execute({num, desc, dest, type, project, user}: Request) {

        const object = await prismaClient.request.updateMany({
            data:{
                num: num,
                desc: desc,
                dest: dest,
                type: type,
                project: project,
                user: user
            }
        })

        return object;
    }
}

export { ChangeRequestService }