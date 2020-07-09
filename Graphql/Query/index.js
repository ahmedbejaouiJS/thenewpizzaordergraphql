const Query = {
    Query: { 
      getOk: async (_, arg, ctx) => { 
      return {
        ok: "test seccuss "
      }
      } 
    }
}; 

module.exports.Query = Query;


