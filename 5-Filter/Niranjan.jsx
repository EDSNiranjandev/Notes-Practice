
const FilterExample = ({ users, searchText, onlyActive }) => {
  
  // ---------------------------------------------------------
  // Filter का तरीका 1 और 2: Search Text + Active (Boolean)
  // ---------------------------------------------------------
  let finalUsers = users.filter((user) => {
    // अगर सर्च बॉक्स में कुछ लिखा है, तो नाम में उसे ढूँढो
    const matchSearch = user.naam.toLowerCase().includes(searchText.toLowerCase());
    
    // अगर Active वाला चेकबॉक्स टिक है, तो सिर्फ active==true वालों को रखो
    const matchActive = onlyActive ? user.active === true : true;

    // दोनों कंडीशन सही हों तभी लिस्ट में रखो
    return matchSearch && matchActive;
  });

  // ---------------------------------------------------------
  // Filter का तरीका 3: सिर्फ 18 साल से बड़े (Number Filter)
  // ---------------------------------------------------------
  const adults = users.filter((user) => user.age >= 18);

  // ---------------------------------------------------------
  // Filter का तरीका 4: एक खास User को डिलीट करना
  // ---------------------------------------------------------
  const idToDelete = 2; // मान लो हमें id=2 (Mukesh) को हटाना है
  const usersAfterDelete = users.filter((user) => user.id !== idToDelete);

  return (
    <div>
      {/* 1. मुख्य लिस्ट (Search + Active वाला फिल्टर) */}
      <h2>Filtered Users (Search & Active)</h2>
      <ul>
        {finalUsers.map((u) => (
          <li key={u.id}>{u.naam} - {u.role} (Age: {u.age})</li>
        ))}
      </ul>

      {/* 2. सिर्फ Adults (18+) वाली लिस्ट */}
      <h2>Adults (18+)</h2>
      <ul>
        {adults.map((u) => (
          <li key={u.id}>{u.naam} - {u.age} saal</li>
        ))}
      </ul>

      {/* 3. डिलीट के बाद बची हुई लिस्ट */}
      <h2>List after deleting id=2</h2>
      <ul>
        {usersAfterDelete.map((u) => (
          <li key={u.id}>{u.naam}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterExample;
