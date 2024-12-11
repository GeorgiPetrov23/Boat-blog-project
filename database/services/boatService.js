import Boat from '../models/Boat.js';

const boatService = {
    getAll(){
        return Boat.find();
    },
    getOne(BoatId){
        return Boat.findById(boatId);
    },
    edit(BoatId, BoatData){
        return Boat.findByIdAndUpdate(boatId, boatData);
    },
    delete(Boatid){
        return Boat.findByIdAndDelete(boatId);
    },
    create(BoatData, userId) {
        return Boat.create({...boatData, owner: userId});
    }
};

export default boatService;   