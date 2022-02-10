import Counter from "./Counter.js";
import {title,btnAdd,btnSubstract} from "./queries.js"

const counter = new Counter();

if(!localStorage.getItem("counter")){
    title.innerHTML = 0;
}else{
    title.innerHTML = localStorage.getItem("counter");
};

const event = (btn,prompt)=>{
    if(btn == btnAdd){
        btn.addEventListener("click",()=>{
            counter.add(prompt);
        });
    }else{
        btn.addEventListener("click",()=>{
            counter.substract(prompt);
        });
    }
};

event(btnAdd,title);
event(btnSubstract,title);

