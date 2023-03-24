import { Router } from 'express';
import { personRepository } from '../om/person.js';
export const router = Router();
import { connection } from '../om/client.js';

router.patch('/:id/location/:lng,:lat', async (req, res) => {    
    const id = req.params.id;
    const longitude = Number(req.params.lng);
    const latitude = Number(req.params.lat);
    const locationUpdated = new Date();
    const person = await personRepository.fetch(id);
    person.location = { longitude, latitude };
    person.locationUpdated = locationUpdated;
    await personRepository.save(person);
    let keyName = `${person.keyName}:locationHistory`;
    await connection.xAdd(keyName, '*', person.location);
    res.send({ id, locationUpdated, location: { longitude, latitude } });
});

/***********************************************************************/




