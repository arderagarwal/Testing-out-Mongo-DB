const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log("Error connecting to database")
    }
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name : 'Adarsh',
        age : 21
    })
})