const sql = require('../../../db_connection/index')
const PushNewFormat = require('../index')
const { PizzaOrderInsert,NameOrderInsert } = require('../../Mutation/sqlQuery');
                        
module.exports = async (name,surname,address,city,state,zip,order_name_quantity_price,totalprice,currency) => {


    let order_time = new Date()
    await sql.query( PizzaOrderInsert ,[name,surname,order_time,address,city,state,zip,totalprice,currency], function (err, result1) {
        if (err) console.log("Error when inserting to order_table"); 
        //            Order_name  quantity   price    Order_name  quantity  price
        // assign  [ [ '....',      '25',   '356' ],  ['.......',    '2',   '35' ].......... ] to UserOrders
        let UserOrders = PushNewFormat(order_name_quantity_price);

        //                                  Primary key  Order_name    quantity  price
        // the UserOrder variable now will be [ [ 5,      '.......',     '25',   '356' ].....]
        for(let key in UserOrders){
            UserOrders[key].unshift(result1.insertId);
        }
         sql.query(NameOrderInsert,[UserOrders], function (err, result) {
            if (err) console.log("Error when inserting to order_name_table");

        });
    });
}

// [["Pizza Crudo","5","$50"],["Pizza Marinara","5","$50"],["Pizza Margherita","5","$50"]]