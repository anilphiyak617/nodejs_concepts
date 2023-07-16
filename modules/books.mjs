console.log(globalThis)
console.log("this is books module")
class Books {
    constructor(){
        this.author = "Jacob"
    }

    setAuthor(name){
        this.author = name;
    }

    getAuthor(name){
        // console.log(this.author)
        // return this.author;
        return this.author;
    }
}

export const color="red";

export default new Books();