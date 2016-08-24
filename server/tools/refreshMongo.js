import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import Cake from '../models/Cake';
import User from '../models/User';
import Order from '../models/Order';


const modelsMap = {
  Cake,
  User,
  Order
};

let docs = Object.keys(rawData);

mongoose.connect('mongodb://localhost/cakes');

Object.keys(rawData).forEach(v => {
  modelsMap[v].remove(()=> {
    modelsMap[v].create(rawData[v], ()=> {
      docs = docs.filter(doc => doc !== v);
      console.log(`The data of ${v} created`);// eslint-disable-line no-console
      if(docs.length === 0) {
        console.log('All data refreshed');// eslint-disable-line no-console
        process.exit(0);
      }
    });
  });
});

