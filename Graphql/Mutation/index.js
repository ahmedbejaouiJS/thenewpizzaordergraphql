const sql = require('../../db_connection/index')
const OrderSendFunction = require('../service/mutation/Mutation_Send_Order')
const PushNewFormat = require('../service/index')
const Mutation = {
    Mutation: {
      SendOrder: async (_, {input:{name,surname,address,city,state,zip,order_name_quantity_price,totalprice,currency}}, ctx) => {
        // sql.query(`` ,function (err, result1) { console.log('----------',result1)})
        console.log("this is new format",PushNewFormat(order_name_quantity_price))
        OrderSendFunction(name,surname,address,city,state,zip,order_name_quantity_price,totalprice,currency)
      console.log("inserted")
       return { success: "Order Have been Successfully Sent"}
      } 
    }
}; 

module.exports.Mutation = Mutation;