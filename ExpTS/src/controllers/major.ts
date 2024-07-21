import { Request, Response } from 'express'
import { creatMajor, getMajors, getMajor, removeMajor, updateMajor } from '../service/major';

const index = async (req: Request, res: Response) => {
    try {
        const majors = await getMajors();
        res.render("major/index", { majors })
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("major/create");
    } else {
        try {
            await creatMajor(req.body);
            res.send("criado");
        } catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}

const read = async (req: Request, res: Response) => {

    const { id } = req.params;
    try{
        const major = await getMajor(id)
        res.render("major/read", { major });
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }


}

const update = async (req: Request, res: Response) => {

    const {id} = req.params;
    const major = await getMajor(id)

    if (req.method === "GET") {
        res.render("major/update", {major});
    } else {
        try {
            await updateMajor(id, req.body);
            res.send("modificado");
        } catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}

const remove = async (req: Request, res: Response) => {

    const {id} = req.params;
    try{
        const major = await removeMajor(id)
        res.render("major/remove", {major});
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }

}

export default { index, read, create, update, remove }