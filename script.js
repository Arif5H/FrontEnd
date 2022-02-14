let screen = document.getElementById("screen")

let buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button =>{
   button.addEventListener( "click", (r)=>{
    //    console.log("clicked")
    //    console.log(r)
    //    console.log(r.target)
    //    console.log(r.target.innerText)
    switch(r.target.innerText){
        case "C":
            screen.innerText = screen.innerText.slice(0,0);
            break;
        case "⇐":
            if(screen.innerText){
                screen.innerText = screen.innerText.slice(0,-1);
            }
            break;
        case "=":
            try {
                screen.innerText = eval(screen.innerText)
                
            } catch (error) {
                screen.innerText = "Err"
            }
            break;

            default:
            screen.innerText += r.target.innerText ;
    }

   })
})

let val = [document.getElementsByClassName("number1").value,document.getElementById("number2").value]
let submit = document.getElementById("calculate")
let operation = document.getElementById("operation").value
submit.addEventListener("click" , ()=>{
 switch(operation.innerText)
 {
     case "+":
        screen= val[0]+val[1];
        break;
        case "-":
            screen.innerText= val[0]-val[1];
            break;
            case "*":
                screen.innerText= val[0]*val[1];
                break;
                case "/":
                    screen.innerText= val[0]/val[1];
                    break;
                    case "%": 
                    screen.innerText= val[0]%val[1];
                    break;
                    default:
                    
                        
                    }
                    console.log(screen)
                    
})