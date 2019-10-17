var person = {
    firstName: 'Jimmy',
    lastName: 'Smith',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

person.fullName = 'Jack Franklin';
console.log(person.firstName); // Jack
console.log(person.lastName) // Franklin


class{
    constructor(){
    
    }

// let get = function itemStyle(){
//     return this.style;
// }
// let set = function restyle(style){
//     this.style = style
// }

}


var person1 = {
    firstName: 'Jimmy',
    lastName: 'Smith'
};

Object.defineProperty(person1, 'fullName', {
    get: function() {
        return firstName + ' ' + lastName;
    },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
});