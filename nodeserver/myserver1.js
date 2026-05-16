const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 3001;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbname = 'clothdb';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

async function getDB() {
    await client.connect();
    return client.db(dbname);
}


app.post('/reginsert', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection.insertOne(req.body);
    res.send(result);

});

app.post('/regupdate', async (req, res) => {
    const id = req.query.id;
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
    );
    res.send(result);
});

app.get('/regread', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection.find().toArray();
    res.send(result);
});

app.get('/regsearch', async (req, res) => {
    const id = req.query.id;
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection
        .find({ _id: new ObjectId(id) })
        .toArray();
    res.send(result);
});

app.get('/logdata', async (req, res) => {
    const email = req.query.email;
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection
        .find({ email: email })
        .toArray();
    res.send(result);
});

app.get('/regdelete', async (req, res) => {
    const id = req.query.id;
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection.deleteOne({
        _id: new ObjectId(id)
    });
    res.send(result);

});

app.get('/cityvolunteer', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('volunteer');
    const result = await collection.find().toArray();
    res.send(result);
});

app.post('/donationinsert', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('donation');
    let data = req.body;
    data.status = "Pending";
    const result = await collection.insertOne(data);
    res.send(result);

});

app.get('/donations', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('donation');
    const result = await collection.find().toArray();
    res.send(result);

});

app.get('/donationstatus', async (req, res) => {
    const id = req.query.id;
    const status = req.query.status;
    const volunteer = req.query.volunteer;
    const email = req.query.email;
    const contact = req.query.contact;
    const collectionDate = req.query.collectionDate;
    const db = await getDB();
    const donations = db.collection('donation');
    await donations.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                status: status,
                volunteer: volunteer,
                volunteer_email: email,
                volunteer_contact: contact,
                collectionDate: collectionDate,
                delivered : 'no'
            }
        }
    );
    res.send({ msg: "Donation Updated" });

});

app.get('/userdonations', async (req, res) => {
    const userid = req.query.userid;
    const db = await getDB();
    const collection = db.collection('donation');
    const result = await collection.find({
        userid: userid
    }).toArray();
    res.send(result);
});

app.post('/addvolunteer', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('volunteer');
    const result = await collection.insertOne(req.body);
    res.send(result);
});

app.get('/volunteers', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('volunteer');
    const result = await collection.find().toArray();
    res.send(result);
});

app.get('/deletevolunteer', async (req, res) => {
    const id = req.query.id;
    const db = await getDB();
    const collection = db.collection('volunteer');
    const result = await collection.deleteOne({
        _id: new ObjectId(id)
    });
    res.send(result);
});

app.get('/volunteersearch', async (req, res) => {
    const id = req.query.id;
    const db = await getDB();
    const collection = db.collection('volunteer');
    const result = await collection
        .find({ _id: new ObjectId(id) })
        .toArray();
    res.send(result);
});

app.post('/volunteerupdate', async (req, res) => {
    const id = req.query.id;
    const db = await getDB();
    const collection = db.collection('volunteer');
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
    );
    res.send(result);
});

app.get('/donationstats', async (req, res) => {
    const userid = req.query.userid;
    const db = await getDB();
    const collection = db.collection('donation');
    const total = await collection.countDocuments({ userid: userid });
    const accepted = await collection.countDocuments({ userid: userid, status: "Accepted" });
    const rejected = await collection.countDocuments({ userid: userid, status: "Rejected" });
    const pending = await collection.countDocuments({ userid: userid, status: "Pending" });
    res.send({
        total: total,
        accepted: accepted,
        rejected: rejected,
        pending: pending
    });
});

app.get('/adminstats', async (req, res) => {
    const db = await getDB();
    const users = await db.collection('user').countDocuments();
    const volunteers = await db.collection('volunteer').countDocuments();
    const total = await db.collection('donation').countDocuments();
    const pending = await db.collection('donation').countDocuments({ status: "Pending" });
    const accepted = await db.collection('donation').countDocuments({ status: "Accepted" });
    const rejected = await db.collection('donation').countDocuments({ status: "Rejected" });
    res.send({
        users,
        volunteers,
        total,
        pending,
        accepted,
        rejected
    });

});

app.post('/contactinsert', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('contact');
    let data = req.body;
    data.date = new Date();
    const result = await collection.insertOne(data);
    res.send(result);

});

app.get('/contactmessages', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('contact');
    const result = await collection.find().toArray();
    res.send(result);

});

app.get('/accepteddonations', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('donation');
    const result = await collection.find({ status: "Accepted" }).toArray();
    res.send(result);

});

app.get('/deliverdonation', async (req, res) => {

    const id = req.query.id;

    const db = await getDB();
    const collection = db.collection('donation');

    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { delivered: "yes" } }
    );

    res.send(result);

});

app.post('/deliveryinsert', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('receiver');
    let data = req.body;
    data.createdAt = new Date();
    const result = await collection.insertOne(data);
    res.send(result);

});

app.get('/deliveryrecords', async (req, res) => {
    const db = await getDB();
    const collection = db.collection('receiver');
    const result = await collection.find().toArray();
    res.send(result);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});