let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#newgame");
let turnX=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX)
        {
            box.innerText="X";
            box.classList.remove("font");
            box.classList.add("color");
            turnX=false;
            count++;
        }
        else
        {
            box.innerText="O";
            box.classList.remove("color");
            box.classList.add("font");
            turnX=true;
            count++;
        }
        box.disabled=true;
        for(let i of winPatterns)
        {
           let pos1=boxes[i[0]].innerText;
           let pos2=boxes[i[1]].innerText;
           let pos3=boxes[i[2]].innerText;
           if(pos1!=="" && pos2!="" && pos3!=="")
           {
            if(pos1===pos2 && pos2===pos3)
            {
                msg.innerText=`Congratulations, Winner is ${pos1}`;
                msg.classList.remove("hide");
                resetBtn.classList.add("hide");
                newBtn.classList.remove("hide");
                for(let j of boxes)
                {
                    j.disabled=true;
                }
            }
            if(msg.innerText!==`Congratulations, Winner is ${pos1}` && count==9 )
            {
                msg.innerText="It's a draw";
                msg.classList.remove("hide");
                resetBtn.classList.add("hide");
                newBtn.classList.remove("hide");
            }
           }
        }
    })
});

resetBtn.addEventListener("click", ()=>{
    for(let k of boxes)
    {
        k.innerText="";
        k.disabled=false;
    }
    turnX=true;
    count=0;
});

newBtn.addEventListener("click",()=>{
    for(let v of boxes)
    {
        v.innerText="";
        v.disabled=false;
    }
    msg.classList.add("hide");
    resetBtn.classList.remove("hide");
    newBtn.classList.add("hide");
    turnX=true;
    count=0;
});
