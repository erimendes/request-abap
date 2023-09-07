import { Request, Response } from 'express';
import { DelObjectService } from '../../services/object/DelObjectService'; 

class DelObjectController{
    async handle(req: Request, res: Response){
        const pgmid = req.query.pgmid as string;

        const delOject = new DelObjectService();

        const deleted = await delOject.execute({
            pgmid
        });

        console.log(deleted);

        return res.json(deleted);
        
    }
}

export { DelObjectController }