import {Niranjan} from "./College";
import {useState} from "react";
const fruits=["Apple","Mango","Banana","Orange"];
const users =[
{ id: 5, naam: "Raj",    role: "Drive"}, 
{ id: 10, naam: "Mukesh", role: "Designer"},
{ id: 15, naam: "Priya",  role: "Manager"},   
]
const App= () =>{
const [real,setReal]=useState( [
  { id: 1, naam: "Niranjan", role: "Developer", active: true  },
  { id: 2, naam: "Rahul",    role: "Designer",   active: false },
  { id: 3, naam: "Priya",    role: "Manager",    active: true  },
]);
const [raj,setRaj]=useState(['Bake bajar','Gaya','mumbai',])
    return(
        <div>
 {/* ===========================================            */}
<ul>
    {fruits.map((fal,mumbai)=>(
        <li key={mumbai}>{fal}</li>
    ))
}
</ul>
{/* ============================================ */}
{users.map((user)=>(
    <div key={user.id}>
<h1>{user.naam}</h1>
    </div>
))}
{/* ============================================ */}
{real.map((data)=>(
    <div key={data.id}>
  <p style={{fontSize:"25px",color:"red",fontWeight:"bold"}}>{data.naam}</p>
    </div>
))
}
{/* ================================================ */}
{
    raj.map((suraj,index)=>(
        <di key={index}>
    <h2>{suraj}</h2>
        </di>
    ))
}
{/* ========================================================= */}
    <Niranjan props={real}/>
    </div>
  );
};
export default App;
// vvi: File aur Variables ka structure:
// 
// 1. Ek file me ek Default Component hota hai. Baki chote functions ho sakte hain.
// 2. Fix data (jo nahi badlega) Component ke BAHAR likh sakte hain.
// 3. Jo data badlega (State/Input) wo Component ke ANDAR likhna hai.jaise abhi
//  fruits array component ke bahar likha hai 
// 4. Bade project me sab kuch ek file me nahi likhte, unhe alag-alag 
//    Components aur folders me baant dete hain.
