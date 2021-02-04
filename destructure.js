const person={
    name:'johir',
    age:20,
    job:'facebook',
    gfName:'karina',
    phone:'0124578963'
}

const{name,gfName,age ,phone,salary}=person

// const gfName=person.gfName;
// const phone=person.phone;

//console.log(name,gfName,age ,phone,salary);
//console.log(gfName,age ,phone,salary);

const friends=['rohim','karim','khalek','malek'];
const [cotoFriend,nextFriend,...rest]=friends;
console.log(rest);
