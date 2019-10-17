export let room = [
    {id:'4363523423'},
    {fname:'Ahmad '},
    {sname:'al_nahlawi'},
    {age:22},
    {live:'germany'}
];

export function id(dep){
    console.log(`id is: ${dep[0].id}`);
}
export function fname(dep){
   console.log(`fname is: ${dep[1].fname}`);
}
export function sname (dep){
    console.log(`sname is: ${dep[2].sname}`);
}
export function age (dep){
    console.log(`age is: ${dep[3].age}`);
}
export function live (dep){
    console.log(`live in: ${dep[4].live}`);
}

