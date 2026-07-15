let computer = {cpu:12}
let lenovo = {
    screen:"HD",
    __proto__ : computer }//ab yaha lenovo ka prototype computer object hai toh {cpu:12} print hoga na ki object.prototype 
let tomHardware = {}

console.log(`computer`,computer.__proto__) //here it points towards Object.prototype because like arrays it does not have any prototype object

console.log(`lenovo`,lenovo.__proto__) //here it points towards computer object because we have set the prototype of lenovo to computer