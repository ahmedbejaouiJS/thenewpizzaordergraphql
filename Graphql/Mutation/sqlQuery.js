
module.exports.PizzaOrderInsert = `
insert into set_client_information ( 
    name,
    surname, 
    order_time, 
    address,
    city,
    state,
    zip,
    totalprice,
    currency 
) VALUES (?,?,?,?,?,?,?,?,?)
`

module.exports.NameOrderInsert = `
insert into set_order_information ( 
    id,
    order_name, 
    quantity, 
    price 
) VALUES  ?
`