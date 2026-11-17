

const StatusBadge=({status})=>{
  let badgeColor; //isska matlab ye hia kiye vaeribal abh khali hai iss me abh kuchh nahi rakha hai
 let badgeText; 
 if(status==="active"){
  badgeColor="green";
  badgeText="Active";
 }else if(status==="pending"){
  badgeColor="Orange";
  badgeText="Pending";
 }else{
  badgeColor="red";
  badgeText="Inactive";
 }
  return(
    <div>
<h1 style={{color:badgeColor}}>{badgeText}</h1>
{/* iss me badgeColor ko "me" iss liye nahi likha kha kau kiye string nahi variable hai 
iss ko {me} bhi likhne se kam karta hia leki ek bar ai se bhi puchlena ok*/}

    </div>
  );
} ;
export {StatusBadge};

// vvi :ai se ye puchhna ki ye ek sath else if eksath hota hia iss ka matla kaya hota hai
