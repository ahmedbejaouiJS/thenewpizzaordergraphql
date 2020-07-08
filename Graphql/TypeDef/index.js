const { gql } = require('apollo-server');


const typeDefs = gql`

    type Query {

        GetUserOrder: String
        getOk: String
    }

    type testme {
        ok: String
    }

    input QuserOrderNamePrice {
        id: String
        price: Int
        productDescription: String
        productName: String
        quantityInCart: Int
        totalprice: Int
        inCart: Boolean
        img: String
    }
    # Order Input Schema
    input userOrder {
        name: String,
        surname: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        order_name_quantity_price: [QuserOrderNamePrice!],
        currency: String
        totalprice: Int,
        img: String
    }

    # return sucess if the order was successfully send
    type OrderSuccess {
        success: String
    }

    type Mutation {

        # submit user order
        SendOrder(input:userOrder): OrderSuccess
    }
`



module.exports.typeDefs = typeDefs
