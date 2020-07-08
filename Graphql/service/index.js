
module.exports = function PushNewFormat(ArrToFormat) {

    let NewArr = [];

    for(let key of ArrToFormat) {
        // to insert to database this is the format that we need ["Pizza Margherita",4,40]
        NewArr.push([key.productName,key.quantityInCart,key.totalprice]);
    }

    return NewArr;
    
}