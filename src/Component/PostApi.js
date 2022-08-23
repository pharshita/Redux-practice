import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PostApi() {
    const[firstName,setfirstName]=useState("")
    const[lastName,setlastName]=useState("")
    const[email,setemail]=useState("")
  
    const dispatch=useDispatch()
  return (
    <div>
         <form>
          <label>
            FirstName:
            <input type="text" name="firstName" value={firstName} onChange={(e)=>setfirstName(e.target.value)} />
          </label>

          <label>
            LastName:
            <input type="text" name="lastName" value={lastName} onChange={(e)=>setlastName(e.target.value)} />
          </label>

          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
          </label>
          <button type="submit" className="btn btn-default" onClick={() => dispatch()}>Submit</button>
        </form>
    </div>
  )
}
