const mongodb = require ('mongodb')
const MongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017' //ip address to localhost
const dbName='proj-1'

MongoClient.connect(connectionUrl, (error, res1) =>{
    if(error){
        return console.log('error')
    }
    console.log ("Connected successfully to server")
    const db =  res1.db(dbName)
    /////////////////////////////
    //to add data
    // insertOne(doc, options, callback)
    db.collection('users').insertOne({name:'sherif', age: 19} ,(error, data) => {
        if(error){
            console.log('unable to  insert data')
        }
        console.log(data)
    })
//    ////////////////////////////////////////////

    db.collection('users').insertMany(
        [
            {
                name:'sherif',
                age:'19'
            },
            {
                name: 'mohammed',
                age:'15'
            },
            {
                name: 'shereen',
                age:'21'
            },
            {
                name: 'ahmed',
                age:'21'
            },
        ], (erorr, data) =>{
            if(erorr){
            console.log('unable to insert data')
            }
            console.log(data.insertCount) //to get the number of inserted documents

        }
    )
    //////////////////////////////////////////////////////////////////////////////////////////

    // findOne(query,option,callback)

    db.collection('users').findOne({_id:mongodb.ObjectId("65fa1bb8f8246b9fd259396d")},(error,user)=>{
        if(error){
            console.log('unable to  insert data')
        }
        console.log(user)
    })
    /////////////////////////////////////////////////////////
    // to get data that  match (filter) some condition we use find() method
     
   db.collection('users').find({age:"21"}).toArray((error,users) =>{
    if(error){
      return console.log('error')
    }
    console.log(users)
    })
    ////////////////////////////////////////////////////////////////
    //to show the number

    db.collection('users').find({age:"21"}).count((error,users) =>{
        if(error){
          return console.log('error')
        }
        console.log(users)
        })

   
})
