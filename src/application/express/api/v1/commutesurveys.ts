import { Router } from "express";
import { controllers } from "../../../../dependency"

const router = Router()

//@ts-ignore
router.get('/', async (req, res, next) => {
    try {
        let data = await controllers.commutesurvey.read(req.query);
        res.send({
            status: 'success',
            data
        })
    } catch (e) {
        next(e)
    }
})

//@ts-ignore
router.post('/', async (req, res, next) => {
    try {
        await controllers.commutesurvey.create(req.body);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})

//@ts-ignore
router.patch('/:id', async (req, res, next) => {
    try {
        let id = Number(req.params.id);
        await controllers.commutesurvey.update(id, req.body);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})

//@ts-ignore
router.delete('/:id', async (req, res, next) => {
    try {
        let id = Number(req.params.id);
        await controllers.commutesurvey.delete(id);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})


export default router;