
module.exports.PizzaOrderInsert = `
insert into client_information (
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
insert into order_information (
    id,
    order_name,
    quantity,
    price
) VALUES  ?
`
