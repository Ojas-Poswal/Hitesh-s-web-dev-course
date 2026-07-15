function teaOrder(teaType){
    function confirmOrder(){
        return `Your order for ${teaType} is comfirmed`

    }
    return confirmOrder();
}




let aVariable = teaOrder("Green tea")
console.log(aVariable)


let totalCost = (price,quantity)=> { return price * quantity}

let totalPrice = totalCost(55,100)
console.log(totalPrice)


// ab hum function ke parameter mei function daalenge
function makeTea(teaType){
    return `Here is your ${teaType} order`
}

function processTeaOrder(teaMaker){
    return teaMaker("Green Tea")
}
let aVariable2 = processTeaOrder(makeTea)
console.log(aVariable2)