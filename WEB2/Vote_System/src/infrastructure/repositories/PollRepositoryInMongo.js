const {
    MongoClient
} = require('mongodb');

let client;

const connect = async () => {
    const uri = "mongodb+srv://voting-api-user:1234qwer@cluster0.gwb8n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    /* const client = new MongoClient(uri, 
        { useUnifiedTopology: true}, 
        { useNewUrlParser: true }, 
        { connectTimeoutMS: 30000 }, 
        { keepAlive: 1}); */

    client.connect(async err => {
        /* const collection = await client.db("voting-api").collection("poll").find().toArray();
        console.log(collection); */
    });



}

const getClient = () => {
    return client.db("voting-api").collection("poll");
}

const createPoll = poll => {
    getClient().insertOne(poll);
    //console.log(poll);
}

const getPollById = async id => {
    console.log("DB MONGO - ", id);
    const poll = await getClient().findOne({id: id});
    console.log(poll);


    if(poll){
        return poll;
    }
    return null;
    /* try {
        const poll = await getClient().findOne({
            id: id
        });
        console.log(poll);
    } catch {
        throw (err)
    } */

}

const update = async poll => {
    await getClient().findOneAndUpdate({id: poll.id}, {$set: {options: poll.options, cpfs: poll.cpfs}});
}

module.exports = {
    createPoll,
    connect,
    getPollById,
    update
};