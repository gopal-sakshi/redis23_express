// import { Client } from 'redis-om';
// const url = process.env.REDIS_URL;  

// const client = await new Client().open(url);        // we created a Redis OM Client and then called .open() on it
// export default client;


// If we didn't have the .env file or have a REDIS_URL property in our .env file
// the code reads the REDIS_URL value from the actual environment variables.


// Client class is the thing that knows how to talk to Redis on behalf of Redis OM.
// One option is to put our client in its own file and export it. 
// This ensures that the application has one & only one instance of Client 
    // and thus only one connection to Redis Stack. 
// Since Redis & JavaScript are both (more or less) single-threaded, this works neatly.


/**********************************************************************************/

import { Client } from 'redis-om';
const url = process.env.REDIS_URL;
import { createClient } from 'redis';
export const connection = createClient({ url });                /* create a connection to Redis with Node Redis */
await connection.connect();
const client = await new Client().use(connection);          /* create a Client and bind it to the Node Redis connection */
export default client;

/**********************************************************************************/