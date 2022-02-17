class Validation {
    constructor(elements){
        this.username = elements.username.value
        this.password = elements.password.value
        this.repeatPassword =elements.repeatpassword.value
    }
    ValedateUsername(){
        if (this.username.length<5) {
           return this.validator("Enter Username", false, "username")
        }
        return this.validator(null, true, "username")
    }
    ValedatePassword(){
        if (this.password.length<8 ) {
           return this.validator("Password should contain 8 or more letters", false, "password")
        }
        else if(this.password != "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"){
            return this.validator("Password should contain at least 1 Upper/lowercase & 1 special character", false, "password")
        }
        return this.validator(null, true, "password")
    }
    ValedateRepeatPassword(){
        if (this.repeatPassword.length<8) {
            return this.validator("Repeat-Password should contain 8 or more letters", false, "repeatpassword")
         }
        else if (this.password.length !== this.repeatPassword.length) {
            return this.validator("Repeat Password is not equal Password", false, "repeatpassword")
        }
        return this.validator(null, true, "repeatpassword")
    }
    ValidateAll(){
        let usernameV = this.ValedateUsername()
        let passwordV  = this.ValedatePassword()
        let repeatPasswordV = this.ValedateRepeatPassword()
        
         if(usernameV.status){ console.log("Username: "+this.username)}
         if (passwordV.status) {console.log("Password: "+this.password)}
         if (repeatPasswordV.status) {console.log("RepeatPassword: "+ this.repeatPassword)}
    }

    validator(msg , checker, inputName){
        if (checker) 
        {   document.getElementById(inputName+'-error').textContent = null;
            return{
                status:true,
                message:null
            }
        }
        else{
            document.getElementById(inputName+'-error').textContent = msg;
            return{
                status:false,
                message:msg
            }
        }
    }
}

const submitForm=(event) =>{
    const elements = event.target.elements;
    event.preventDefault();
    

    let newRegister = new Validation(elements)
    newRegister.ValidateAll()
    // if (elements.username.value.length<5) {
    //     document.getElementById('username-error').textContent = "Enter Username"
    // }
    // if (elements.password.value.length<8) {
    //     console.log(document.getElementById("password-error"))
    //     document.getElementById("password-error").textContent= "Enter Password"
    // }

    // if (elements.repeatpassword.value.length<8) {
    //     document.getElementById("repeatpassword-error").textContent= "Enter Repeat Password"
    // }

}

// document.getElementById("registration-form").addEventListener("submit", submitForm)
