class Num {
    constructor(){
        this.value =[]
    }
    valueOf(){
    return this.value.reduce((sum , acc) => sum+=acc)
    }
}
const test = new Num()
test.push(5)
console.log(test)