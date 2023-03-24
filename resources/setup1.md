https://redis.io/docs/stack/get-started/tutorials/stack-node/

git clone git@github.com:redis-developer/express-redis-om-workshop.git

redis-server                // to start redis-server
redis-stack-server          // to start redis-stack-server
                            // any error ===> delete 'rdb' dump files
                            // <sudo rm -f ~/dump.rdb /dump.rdb>

LEARN SWAGGER
https://blog.logrocket.com/documenting-express-js-api-swagger/

--------------------------------------------------------------------------------

Redis OM doesn’t support Streams 
- But Redis Stack does
- So, we use "node-redis"