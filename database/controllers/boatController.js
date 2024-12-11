import { Router } from 'express';
import boatService from '../services/boatService.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const boatController = Router();


boatController.get('/', async (req, res) => {
    const boats = await boatService.getAll().lean();
    console.log(boats);
    return boats;
});


boatController.get('/:boatId/details', async (req, res) => {
    const boatId = req.params.boatId;
    const boat = await boatService.getOne(boatId).lean();

    const isOwner = boat.owner && boat.owner.toString() === req.user?._id;

    return {boat, isOwner};
});


boatController.post('/create', async (req, res) => {
    const boatData = req.body;
    const userId = req.user._id;

    try {
        await boatService.create(boatData, userId);
    } catch (err) {
        const error = getErrorMessage(err);
        console.log(error);
        return {boat: boatData, error};
    }

});

export default boatController;