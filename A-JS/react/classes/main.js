// ___main.js___

class _Users_{
    constructor( age ){

        this.age = age;
    }
    calculate_age( years ){

        return this.age = 2019 - years ;
    }
}


class Ahmad extends _Users_ {
    constructor( age ){
            super( age );

        this.fname = 'AHMAD';
        this.lname = 'NAJJAR';
    }
}

class Mohammad extends _Users_{
    constructor( age ){
        super( age );

    this.fname = 'MOHAMMAD';
    this.lname = 'YOUSEF';
    }
}


export default _Users_;
export  { Ahmad };
export  { Mohammad };