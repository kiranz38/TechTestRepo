const dbPool = require('./db');
const express =require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {
    const rows = await dbPool.query('SELECT * FROM spaceData');
    res.status(200);
    res.send({
        result: JSON.stringify(rows)
    });
});

app.get('/setSpaceData',async (req,res)=>{
    const result = await dbpool.query(
      `INSERT INTO spaceData
    (capsule_id,capsule_serial,
      details,status,original_launch) VALUES ? `,
      [req.map(item =>
      [item.capsule_id,item.capsule_serial
      ,item.details,item.status,item.original_launch])],
    (err,results)=>{
        res.status(200);
        res.send({
          result: JSON.stringify(results)
        });
    });


});

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);
