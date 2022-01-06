const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
const db = require('../config/database');

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log('Error: ' + err));

const { Cities, Trucks, Runs, Transactions, Warehouses, Users } = require('./models/index');
const { CitiesAPI, TrucksAPI, RunsAPI, TransactionsAPI, WarehousesAPI, UsersAPI } = require('./routes/index');
db.sync();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

Users.hasOne(Transactions, { foreignKey: 'user' });
Trucks.hasOne(Transactions, { foreignKey: 'plate' });
Warehouses.hasOne(Transactions, { foreignKey: 'warehouse' });
Cities.hasOne(Transactions, { foreignKey: 'city' });
Runs.hasOne(Transactions, { foreignKey: 'run_id' });
Cities.hasOne(Warehouses, { foreignKey: 'city' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/cities', CitiesAPI);
app.use('/api/trucks', TrucksAPI);
app.use('/api/runs', RunsAPI);
app.use('/api/transactions', TransactionsAPI);
app.use('/api/warehouses', WarehousesAPI);
app.use('/api/users', UsersAPI);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
