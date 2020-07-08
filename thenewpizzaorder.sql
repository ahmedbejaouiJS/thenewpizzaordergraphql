

/* the new pizza order table */


CREATE TABLE set_client_information (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(255),
    surname varchar(255),
    address varchar(255),
    city varchar(255),
    state varchar(255),
    zip varchar(255),
    order_time varchar(255),
    currency  varchar(255),
    totalprice varchar(255),
    img varchar(255)
)

-- the Order name , it can be multiple order name, and will be inserted with the set_client_information primary key

CREATE TABLE set_order_information (
  id INT,
  order_name varchar(255),
  quantity   varchar(255),
  price varchar(255),
  FOREIGN KEY(id) REFERENCES order_table(id)
)



-- to select and join all order where the id in the two table equle
-->
select * from set_client_information INNER JOIN set_order_information ON set_client_information.id = set_order_information.id

-->
/*
[
  {
    id: 3,
    name: 'ahmed',
    surname: 'apollo',
    address: 'tunis',
    city: '...',
    state: '...',
    zip: '...',
    order_time: '2020-07-08 12:48:52.742',
    currency: 'EUR',
    totalprice: '21',
    order_name: 'Pizza Quattro Stagioni',
    quantity: '1',
    price: '10'
  },
  {
    id: 3,
    name: 'ahmed',
    surname: 'apollo',
    address: 'tunis',
    city: 'usa',
    state: 'us',
    zip: '1234',
    order_time: '2020-07-08 12:48:52.742',
    currency: 'EUR',
    totalprice: '21',
    order_name: 'Pizza Crudo',
    quantity: '1',
    price: '10'
  }
]
*/
