import { Router } from 'express';
import { personRepository } from '../om/person.js';
export const router = Router();

router.get('/all', async (req, res) => {
    const persons = await personRepository.search().return.all();
    res.send(persons);
});

router.get('/by-last-name/:lastName', async (req, res) => {
    const lastName = req.params.lastName;
    const persons = await personRepository.search()
      .where('lastName').equals(lastName).return.all();
    res.send(persons);
});

router.get('/seniorCitizen', async (req, res) => {
  const persons = await personRepository.search().where('age').gte(60).return.all();
  res.send(persons);
});


router.get('/textSearch/:keyword', async (req, res) => {
  const keyword23 = req.params.keyword;
  const persons = await personRepository.search()
    .where('personalStatement').matches(keyword23)
    .return.all();
  res.send(persons);
});


router.get('/near/:lng,:lat/radius/:radius', async (req, res) => {
  const longitude = Number(req.params.lng);
  const latitude = Number(req.params.lat);
  const radius = Number(req.params.radius);
  const persons = await personRepository.search()
    .where('location')
    .inRadius(circle => circle
      .longitude(longitude)
      .latitude(latitude)
      .radius(radius)
      .miles)
    .return.all();
  res.send(persons);
});

