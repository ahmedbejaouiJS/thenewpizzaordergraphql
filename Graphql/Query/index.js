const {userOrder} = require('../service/query/Query_get_all_order')

const Query = {
    Query: {
      GetUserOrder: async (_, arg, ctx) => {
        console.log(await userOrder())
      return  await userOrder()
      },
      getOk: async (_, arg, ctx) => { 
      return {
        ok: "test seccuss "
      }
      } 
    }
}; 

module.exports.Query = Query;


