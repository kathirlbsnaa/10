import React, { useState } from "react";

function Form(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [password,setPassword]=useState('')
    const [conformPassword,setconformPaswword]=useState('')

    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length===0||lastName.length===0 ||password.length<8 ||conformPassword.length===8 ){
            setError(true)
        }
        if(firstName&&lastName&&password&&conformPassword)
        {
        console.log("First Name: ",firstName,"\nLast Name: ",lastName)
        }
    }
    
    return(
        
        <>
           <form action="#" class="form auth__form"  onSubmit={handleSubmit}>
         
          <div class="form__field">
            <label for="formInput#text">First Name: </label>
            <input
              class="input input--text"
              id="formInput#text"
              type="text"
              name="text"
              placeholder="First Name"
              onChange={e=>setFirstName(e.target.value)}
            />
          
          {error&&firstName.length<=0?
            <label>First Name can't be Empty</label>:""}
          </div>

            <div class="form__field">
              <label for="formInput#text">Last Name: </label>
              <input
                class="input input--text"
                id="formInput#text"
                type="text"
                name="text"
                placeholder="Last Name"
                onChange={e=>setLastName(e.target.value)}
              />
            
            {error&&lastName.length<=0?
              <label>First Name can't be Empty</label>:""}
            </div>

          

          <div class="form__field">
            <label for="formInput#password">Password: </label>
            <input
              class="input input--password"
              id="formInput#passowrd"
              type="password"
              name="password"
              placeholder="password"
             
              onChange={e=>setPassword(e.target.value)}
            />
            {error&&lastName.length<=0?
              <label>Password should be 8 characters</label>:""}
          </div>

          <div class="form__field">
            <label for="formInput#confirm-password">Confirm Password: </label>
            <input
              class="input input--password"
              id="formInput#confirm-passowrd"
              type="password"
              name="confirm-password"
              placeholder="retype-Password"
              onChange={e=>setconformPaswword(e.target.value)}
            />
            {error&&lastName.length<=0?
              <label>Password should be re-typed correctely</label>:""}
          </div>
          <div class="auth__actions">
            <input class="btn btn--sub btn--lg" type="submit" value="Sign  In" />
          </div>
        </form>
        </>
    );
}
export default Form;