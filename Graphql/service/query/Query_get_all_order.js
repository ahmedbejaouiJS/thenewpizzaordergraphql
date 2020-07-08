const sql = require('../../../db_connection/index')

let sqlq = `
    select * from order_table 
    INNER JOIN order_name_table 
    ON order_table.id = order_name_table.id
`
var res;
var userOrder = async function(){
    
     await  sql.query( 'select * from order_name_table', async function (err, result) {   
            console.log('---------------------------')
            if (err) console.log("Error when inserting to order_table");
            res = [
                    {
                        "id": 1,
                        "order_name": "margarita",
                        "quantity": "5",
                        "price": "25"
                    },
                    {
                        "id": 1,
                        "order_name": "mike",
                        "quantity": "4",
                        "price": "654"
                    }]
       });

       return [res];
   
}

module.exports.userOrder = userOrder