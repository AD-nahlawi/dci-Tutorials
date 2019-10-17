//let allColors = '012ABCDEF3456789';
// function hexaRandom(){
//     let color = "#";
//     for (i = 0; i < 6; i++){

//         let random16 = Math.floor(Math.random() * 16);
//         color += allColors[random16];
//         };

//         return color;
// }

console.log('arrays.js');
class BootStrapClasses{
    constructor(){
        //---------------------------------------- set BGcolor   XXXX
        this.bgColorArr = [
            'bg-primary','bg-secondary',
            'bg-success','bg-danger',
            'bg-warning','bg-info',
            'bg-light','bg-dark',
            'bg-white'
        ];
        this.bgArrCounter = 0;

        //---------------------------------------- text color    XXXX
        this.textColorArr = [
            'text-primary','text-secondary',
            'text-success','text-danger',
            'text-warning','text-info',
            'text-light','text-dark',
            'text-muted','text-white'
        ];
        this.tcArrCounter = 0;

        //---------------------------------------- set Borders    XXXX
        this.borderArr = [
            'border border-top',
            'border border-right','border border-bottom',
            'border border-left'
        ];
        this.bordersArrCounter = 0;

        //---------------------------------------- Borders Colors    XXXX
        this.borderColorArr = [
            'border border-primary','border border-secondary',
            'border border-success','border border-danger',
            'border border-warning','border border-info',
            'border border-light','border border-dark',
            'border border-white'
        ];
        this.borderColorsArrCounter = 0;

        //---------------------------------------- Text alignment    XXXX
        this.textAligmentArr = [
            'text-right','text-center','text-left'
        ];
        this.textAligmentArrCounter = 0;

        //---------------------------------------- text transform                          
        this.textTransformArr  = [
            'text-lowercase','text-uppercase','text-capitalize'
        ];
        this.textTransformsArrCounter = 0;

        //---------------------------------------- adding More Classes                          
        this.addMoreAttsArr = ['empty'];
    };
    textColorF(){
        if(this.tcArrCounter == this.textColorArr.length){
            this.tcArrCounter = 0 ;
        }
        if(this.tcArrCounter < this.textColorArr.length){
            console.log(this.textColorArr[this.tcArrCounter]);
        }
        this.tcArrCounter++;
    }
    bgColorsF(){
        if(this.bgArrCounter == this.bgColorArr.length){
            this.bgArrCounter = 0 ;
        }
        if(this.bgArrCounter < this.bgColorArr.length){
            console.log(this.bgColorArr[this.bgArrCounter]);
        }
        this.bgArrCounter++;
    }
    borderF(){
        if(this.bordersArrCounter == this.borderArr.length){
            this.bordersArrCounter = 0 ;
        }
        if(this.bordersArrCounter < this.borderArr.length){
            console.log(this.borderArr[this.bordersArrCounter]);
        }
        this.bordersArrCounter++;
    }
    borderColorF(){    
        if(this.borderColorsArrCounter == this.borderColorArr.length){
            this.borderColorsArrCounter = 0 ;
        }
        if(this.borderColorsArrCounter < this.borderColorArr.length){
            console.log(this.borderColorArr[this.borderColorsArrCounter]);
        }
        this.borderColorsArrCounter++;  
    }
    textAligmentF(){  
        if(this.textAligmentArrCounter == this.textAligmentArr.length){
            this.textAligmentArrCounter = 0 ;
        }
        if(this.textAligmentArrCounter < this.textAligmentArr.length){
            console.log(this.textAligmentArr[this.textAligmentArrCounter]);
        }
        this.textAligmentArrCounter++;  
    }
    textTransformF(){ 
        if(this.textTransformsArrCounter == this.textTransformArr.length){
            this.textTransformsArrCounter = 0 ;
        }
        if(this.textTransformsArrCounter < this.textTransformArr.length){
            console.log(this.textTransformArr[this.textTransformsArrCounter]);
        }
        this.textTransformsArrCounter++;   
    }
    addMoreAttsF(){   
        console.log(this.addMoreAttsArr); 
    }
}
//console.table(book);
// JSON.stringify(myObj);
// let addMoreAtts = new BootStrapClasses();
// addMoreAtts.addMoreAttsF();
// addMoreAtts.addMoreAttsF();

// let bgColors = new BootStrapClasses();
// bgColors.bgColorsF(); 
// bgColors.bgColorsF(); 

// let tColors = new BootStrapClasses();
// tColors.textColorF();
// tColors.textColorF();

// let border = new BootStrapClasses();
// border.borderF(); 
// border.borderF(); 

// let borderColor = new BootStrapClasses();
// borderColor.borderColorF();
// borderColor.borderColorF();

// let textAligment = new BootStrapClasses();
// textAligment.textAligmentF();
// textAligment.textAligmentF();

// let textTransform = new BootStrapClasses();
// textTransform.textTransformF();
// textTransform.textTransformF();
// textTransform.textTransformF();
// textTransform.textTransformF();

// let googleFonts = [];