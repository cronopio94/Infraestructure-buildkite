const getName = require( '../services/itemService');
const isEqual =require('assert');

describe('Item', function() {
  
    it('shouldReturnItemName', function() {
    const request = {body: {name: 'lorenxo-el-gato'}}
    const expectedValue = 'lorenxo-el-gato'
    const name= getName(request)
    isEqual(name,expectedValue);
    });
});

