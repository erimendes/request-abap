import { Request, Response } from 'express';
import { ListObjectService } from '../../services/object/ListObjectService';

class ListObjectController{
    async handle(req: Request, res: Response){
        const pgmid = req.query.pgmid as string;

        const listObject = new ListObjectService();

        const object = await listObject.execute({
            pgmid
        });

        console.log(object);

        return res.json(object);
        
    }
}

export { ListObjectController }