/**
 * Created by Administrator on 2017/8/3.
 */
module.exports = {
    port: 8000,
    session: {
        secret: 'blog',
        key: 'blog',
        maxAge: 2592000000
    },
    mongodb:'mongodb://muh005:H%40rM0Ny!@muh005-shard-00-00-gk2jg.mongodb.net:27017,muh005-shard-00-01-gk2jg.mongodb.net:27017,muh005-shard-00-02-gk2jg.mongodb.net:27017/test?ssl=true&replicaSet=muh005-shard-0&authSource=admin'
	//set the MongoDB connection string to access your new database.
};
