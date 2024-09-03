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
const url_to_connect_to_default_db = "redis://localhost:6379";
const url_connect_to_db1 = "redis://localhost:6379/1";         
import { createClient } from 'redis';
export const connection = createClient({ url_connect_to_db1 });     
await connection.connect();
const client = await new Client().use(connection);
export default client;

/**********************************************************************************


const client23 = redis.createClient({
    host: "localhost",
    port: 6379,
    password: "1234",
    user: "username"
});
const client24 = redis.createClient("redis://username:1234@localhost:6379");

const client25 = redis.createClient({ url: "redis://username:1234@localhost:6379" });
const client26 = redis.createClient({ url: "redis://[[username]:[password]]@localhost:6379/[database number]" });

*********************************************************************************/


