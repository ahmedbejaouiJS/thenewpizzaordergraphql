
const { Query } = require('./Query/index');
const { Mutation }= require("./Mutation/index")


const resolvers = Object.assign(
{
    Query: Object.assign({},Query),
    Mutation: Object.assign({}, Mutation)
},
Query,
Mutation)


module.exports.resolvers = resolvers