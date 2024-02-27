

let arr = ["101100101101100101001010","10100011100101000001000010010010001111","1111001010010100010","0100101010101001010010101010101","111010101010010"];
let t = [5,8,3,3.5,10,5,4,6,4,2,5,3,4,6,4,5,8,3,3.5,10,5,4,6,4,2,5,3,4,6,4];


function spawn(a,l,s,d){
  const para = document.createElement("p");
  para.className = "jk";
  para.style.left = l + "px";
  para.style.animationDuration = s + "s";
  para.style.animationDelay = d + "s";
  
  for(let i = 0; i < a.length; i++){
    const temp = document.createElement("span");
    const node = document.createTextNode(a[i] + " ");
    temp.style.color = "rgb(144,238,144,"+ (i*1)/a.length +")"
    temp.style.textShadow = "0 0 3px rgb(144,238,144,"+ (i*1)/a.length +"), 0 0 6px rgb(144,238,144,"+(i*1)/a.length +")";
    temp.appendChild(node);
    
    function glitch(){
      let chan = Math.round(Math.random());
      if(chan == 1){
        id = setInterval(frame, 150);
        let pos = 0;
        function frame() {
           let a = temp.innerHTML;
           if(a == "1 "){
             temp.innerHTML = "0" + " ";
            }
           else{
             temp.innerHTML = "1" + " ";
           }
        }
      }  
    }
    
    let j = setInterval(glitch, 2000);
    
    
    para.appendChild(temp);
  }
  
  const temp = document.createElement("span");temp.className = "blink";
  const node = document.createTextNode(".");
  temp.appendChild(node);
  
  para.appendChild(temp);
  const element = document.getElementById("container");
  element.appendChild(para);
}

for(let i = 0; i < 30; i++){
    if( i < (30/2)){
        let ai = Math.floor(Math.random() * 5);
        let speed = Math.random() * 9 + 3;
        let delay = Math.random() * 4 + 2;
        spawn(arr[ai],i*25,t[i],delay); // 3 - 9 // 2 - 4 
    }
    else{
        let ai = Math.floor(Math.random() * 5);
        let speed = Math.random() * 9 + 3;
        let delay = Math.random() * 4 + 2;
        spawn(arr[ai],i*25 + 780,t[i],delay); // 3 - 9 // 2 - 4 
    }
    
}



