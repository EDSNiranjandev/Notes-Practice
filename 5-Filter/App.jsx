
import { useState } from "react";
import FilterExample from "./Niranjan";

const App = () => {
  // 1. असली डेटा (Array of Objects)
  const usersData = [
    { id: 1, naam: "Niranjan", role: "Developer", age: 20, active: true },
    { id: 2, naam: "Mukesh", role: "Designer", age: 17, active: false },
    { id: 3, naam: "Priya", role: "Manager", age: 25, active: true },
    { id: 4, naam: "Rahul", role: "Developer", age: 22, active: false },
  ];

  // 2. Search के लिए State
  const [search, setSearch] = useState("");
  // 3. सिर्फ Active Users दिखाने के लिए State (Checkbox)
  const [showActive, setShowActive] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filter Practice Master</h1>
      
      {/* Search Box */}
      <input 
        type="text" 
        placeholder="Search by name..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* Active Checkbox */}
      <label style={{ marginLeft: "20px" }}>
        <input 
          type="checkbox" 
          checked={showActive} 
          onChange={(e) => setShowActive(e.target.checked)} 
        /> 
        Sirf Active dikhao
      </label>

      <hr />

      {/* 👇 यहाँ हम अपना FilterExample कंपोनेंट बुला रहे हैं और उसे सारा डेटा भेज रहे हैं */}
      <FilterExample 
        users={usersData} 
        searchText={search} 
        onlyActive={showActive} 
      />
    </div>
  );
};

export default App;
