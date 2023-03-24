import { Entity, Schema } from 'redis-om';
import client from './client.js';

// An Entity is the class that holds you data when you work with it—the thing being mapped to.
// entity ====> the thingy that you ===> create, read, update, delete
class Person extends Entity {}

// A schema defines the fields on your entity & their types
const personSchema = new Schema(Person, {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    age: { type: 'number' },
    verified: { type: 'boolean' },
    location: { type: 'point' },
    locationUpdated: { type: 'date' },
    skills: { type: 'string[]' },
    personalStatement: { type: 'text' }
});

// A Repository is the main interface into Redis OM. 
// It gives us the methods to read, write, remove a specific Entity
export const personRepository = client.fetchRepository(personSchema)
await personRepository.createIndex()

