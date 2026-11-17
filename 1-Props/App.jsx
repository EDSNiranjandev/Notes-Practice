import {UserCard} from "./Header";
let Component=()=>{
    function Name(){
        alert("ye props function call huaa hai")
    }
    return(
<div>
    <h1>React Calaud notes Prectice</h1>
    <UserCard
    naam="Niranjan"
    age={20}
    city="Bihar"
    role="web Devloper"
    />
    <UserCard 
    naam="Rahul"
    age={22}
    city="Delhi"
    role="React Devloper"
    />
<br/>
<UserCard title="Mera card" pass={Name}>
    <h1>{'mai content data hu '}</h1>
    <button onClick={Name}>Content Btn</button>
</UserCard>
</div>
    )
}
export default Component;
