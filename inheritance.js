class Parent{
    constructor(){
        this.fatherName='Jobayer';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name+' '+this.fatherName;
    }
}
const baby=new Child('sadid');
const baby2=new Child('raisa');
console.log(baby)
console.log(baby2)
console.log(baby.getFullName());
console.log(baby2.getFullName());