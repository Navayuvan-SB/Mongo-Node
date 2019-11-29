/* ====================================================
                MongoDB with Node JS
==================================================== */

// Inisializing mongodb driver
var mongoClient = require('mongodb').MongoClient;

// Specifying the connection url
var url = "mongodb://localhost/";

// Connecting to DB
mongoClient.connect(url, function (err, db) {

    console.log("Success");

    // Specifying the database
    var dbo = db.db("test")

    /*============== Create A collection ==============*/

    // creating collection
    // dbo.createCollection("customers", function (err, res) {

    //     console.log("Collection created");

    //     // Close the connection
    //     db.close();
    // });

    /*============== Inserting one Document ==============*/

    // // Data to Insert (Document)
    // myObj = { 
    //     name: "Navayuvan",
    //     dob: {
    //         date: 11,
    //         month: 06,
    //         year: 2000
    //     }
    // };

    // // Inserting into the collection
    // dbo.collection("customers").insertOne(myObj, function (err, res) { 

    //     console.log("Data Inserted");
    //     db.close();
    // });

    /*============== Inserting Many Document ==============*/

    // // Data to Insert (document)
    // var myobj = [
    //     { name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}
    // ];

    // // Inserting into the collection
    // dbo.collection("customers").insertMany(myobj, function (err, res) {

    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close();
    // });

    
    /*============== FInd One Document ==============*/

    // dbo.collection("customers").findOne({}, function (err, res) {
       
    //     console.log(res);
    //     db.close();
    // });

    /*============== Find Many Document ==============*/

    // dbo.collection("customers").find({}).toArray(function(err, res) {

    //     console.log(res);
    //     db.close();
    // });

    /*============== Find Many Document (projection) ==============*/

    // dbo.collection("customers").find({}, {projection: {_id: 0 }})
    // .toArray(function(err, res) {

    //     console.log(res);
    //     db.close();
    // });

    /*============== Find with Query ==============*/

    // // Query condition
    // var Query = {address: 'Highway 71'}

    // // Querying...
    // dbo.collection("customers").find(Query).toArray(function (err, res) {
    //     console.log(res);
    // });    

    /*============== Sorting the Data ==============*/

    // // Sorting constraints
    // var mySort = { name: -1 }
    // dbo.collection("customers").find().sort(mySort).toArray(function (err, res) {

    //     console.log(res);
    //     db.close();
    // });

    /*============== Deleting a Document ==============*/

    // // Deleting Constraints
    // var del = { address: 'Mountain 21' };

    // dbo.collection("customers").deleteOne(del, function (err, res) {
    //     console.log("One Item Deleted");
    //     db.close();
    // });

    /*============== Deleting many Document ==============*/

    // // Deleting Constraints
    // var del = { address: /^O/ };

    // dbo.collection("customers").deleteMany(del, function (err, res) {
        
    //     console.log(res.result.n + " document(s) deleted");
    //     db.close();
    // });

    /*============== Droping the collections ==============*/

    // dbo.collection("customers").drop(function (err, res) {

    //     console.log("Collection deleted");
    //     db.close();
    // });


    /*============== Update the Document ==============*/

    // // Query
    // var myQuery = { address: 'Valley 345' }

    // // Data to Update
    // var dataToUpdate = { $set: { name:'Mickey', address: 'Canyon 123' } };

    // // Update Query
    // dbo.collection("customers").updateOne(myQuery, dataToUpdate, function (err, res) {
    //     console.log("1 document updated");
    //     db.close();
    // });

    /*============== Update Many Documents ==============*/

    // // Query
    // var myQuery = { address: /^S/ };

    // // Data to Update
    // var dataToUpdate = { $set: { name: "Minnie" } };

    // // Update Query
    // dbo.collection("customers").updateMany(myQuery, dataToUpdate, function (err, res) {

    //     console.log(res.result.nModified + " document(s) updated");
    //     db.close();
    // });

    /*============== Limit the Results ==============*/

    // dbo.collection("customers").find().limit(5).toArray(function (err, res) {

    //     console.log(res);
    //     db.close();
    // });

});