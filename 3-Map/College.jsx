

const Niranjan=({props})=>{
  if(props.length === 0){
    return <p>Koi Data nahi mila </p>
  }
  return(
    <div>
      <h1>Map ka Use Filter ke sath </h1>
      {
        props.filter((u)=>u.active)
        .map((u)=>(
          <div key={u.id}>
<strong>{u.naam}</strong>{u.role}
          </div>
        ))
      }
      {
        props.filter(nk=>nk.active).map(nk=>(
          <div key={nk.id}>
          <p>{nk.role}</p>
          </div>
        ))
      }
    </div>
  )
}
export {Niranjan};
