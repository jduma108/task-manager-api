// CRUD create read update delete 

// start db /Users/jilduma/mongodb/bin/mongod --dbpath=/Users/jilduma/mongodb-data

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    console.log('Connected correctly!')
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Joe',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jill',
    //         age: 24
    //     }, 
    //     {
    //         name: 'Jane',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({_id: new ObjectID("5f10b089c2ce37a4c3d67fbd")}, (error, user) =>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 24}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 24}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').updateOne({_id: new ObjectID("5f10a897832137976d06c7a7")}, {
    //     // $set: {
    //     //     name: 'Kelly'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // }) 

    // db.collection('tasks').updateMany({completed: false},{
    //     // $set: {
    //     //     name: 'Kelly'
    //     // }
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // }) 

    // db.collection('users').deleteMany({age: 24})
    // .then((result => {console.log(result)}))
    // .catch((error) => {console.log(error)})

    // db.collection('tasks').deleteOne({description: 'Go grocery shopping'})
    // .then((result => {console.log(result)}))
    // .catch((error) => {console.log(error)})

})