class Counter {
    constructor(){
        this.title = localStorage.getItem("counter");
    }
    show(){
        return this.title;
    };
    add(item){
        this.title++
        item.innerHTML = this.title
        localStorage.setItem("counter",this.title);
        return this.title;
    };
    substract(item){
        this.title--
        item.innerHTML = this.title
        localStorage.setItem("counter",this.title);
        return this.title;
    };
};

export default Counter;