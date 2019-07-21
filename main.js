let express = require('express');
let app = express();
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: 'lmb'}));
const database = new Datastore('database.db');
database.loadDatabase();
app.get('/api', (Request,Response) => {
    Response.json({test});
})
app.post('api', (Request,Response) => {
    const data = Request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    Response.json(data);
});