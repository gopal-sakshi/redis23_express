import { Entity, Schema } from 'redis-om';
import client from './client.js';

// An Entity is the class that holds you data when you work with it—the thing being mapped to.
// 
class Person extends Entity {}

