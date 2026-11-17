
const UserCard=({naam,age,city,role, raj="rajdev",title,children,pass})=>{

  return(
    <div>
<h2>{naam}</h2>
<h3>{age}</h3>
<p>{city}</p>
<p>{raj}</p>
<span>{role}</span>
<br/>
<h3>{title}</h3>
<div>{children}</div>
{/* vvi: jab bhi ham kisi props me content pass karte hia jasie text color vehrah
to ussko children name se resevi kiya jata hai jiss me componet ko tag bana diya jata hai 
jaie <UserCard> me contant likha jata hai</UserCard> */}
<button onClick={pass}>props fucn call</button>

    </div>
  );
}
export {UserCard};
