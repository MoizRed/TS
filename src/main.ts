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