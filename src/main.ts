//visibility modifiers


class Coder {

  constructor(
    public name: string, 
    public music: string, 
    private  age: number, 
    protected  lang: string = "typescript")
    {

    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
     }

    public getage(){

        return `hello , im ${this.name}`

    }

}


const dave = new Coder('dave ' , "classic" , 38 )

console.log(dave.getage())

class webdev extends Coder{
    constructor(
       public computer : string,
        name: string, 
        music: string, 
        age: number 

    ){
        super(name , music , age)
        this.computer = computer
    }

    public getlang()
    {

        return 'hello im ' + this.lang

    }
    
}

const sata = new webdev("mac" , "sara" , "lofi" , 20)




/////////////////////////////////////////////////////////::



interface musician {

    name : string ,
    instrument : string ,
    play(action : string ) : string



}

class guitatist implements musician {

 name : string 
 instrument : string 

 constructor (name : string , instrument : string ){
    this.name = name 
    this .instrument = instrument

 }

 play (action : string)
 {

    return ` i ${action} ${this.instrument }`
 }


}



const page = new guitatist ("jummy" , "guitar")
////////////////////////////////////////////////////////




class peeps {
    static count : number = 0
    static getCount() : number {

        return peeps.count


    }

    public id : number 

    constructor(public name : string) {

        this.name = name 
        this.id = ++peeps.count


    }


}

const John = new peeps("John")
const steve = new peeps("steve")
const aly = new peeps("aly")

console.log(peeps.count)




///////////////////////////////////////////////


class Bands {

    private datastate : string[]

    constructor(){
        this.datastate = []

    }
    public get data() : 
}






































