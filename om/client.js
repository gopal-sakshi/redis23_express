import { Client } from 'redis-om';
const url = process.env.REDIS_URL;  
const client = await new Client().open(url);
export default client;


// If we didn't have the .env file or have a REDIS_URL property in our .env file
// the code reads the REDIS_URL value from the actual environment variables.


// Client class is the thing that knows how to talk to Redis on behalf of Redis OM.
// One option is to put our client in its own file and export it. 
// This ensures that the application has one & only one instance of Client 
    // and thus only one connection to Redis Stack. 
// Since Redis & JavaScript are both (more or less) single-threaded, this works neatly.
