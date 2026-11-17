
import {Niranjan} from "./Counter"
import {StatusBadge} from "./condition"
import {useState} from "react";
const App=()=>{

    // const isLogin=true;
    let hello=false;
    const hasError=true;
    const isAdmin=true;
    const [user,setUser]=useState(true)
    return(
        <div>
{user?<h1>ap logine ho chuuke hai</h1>:<h1>ap login nah hai </h1>}
        
        <h2>{hello?"ha thik hai bhai":"nahi kharab hai"}</h2>
        {hello?"hello true hai ":" hello false hai"}<br/>
        {hasError && <p>kuchh galti huaaa hai</p>} {/* ye Error keliye dikhaya jata hia jss me koi ek hi 
        candition kam karta hai true ya false koi ek hone me kaya dikhana hi ya Arror me kaya likhna hai iss me && ka 
        use kiya jata hai */}
      {isAdmin && <button>Delete User</button>}

     {user?<h1><button onClick={()=>setUser(false)}>Log Out</button></h1>:
       <h1><button onClick={()=>setUser(true)}>Login</button></h1>
     }
       
    
     <StatusBadge status="active"/>
     <StatusBadge status="pending"/>
     <StatusBadge status="banned"/>
         <Niranjan 
    loading="Loading ho raha hai"
    error="Error:hai"
    // data="data agaya"
    />
        </div>

    )
}
export default App;
// ai se ye puchhna ki kaisa kara hia ki koi true hai o mai ussko button ke 
// madham se false kar saku hala ki maine ye state sekar diya hai
