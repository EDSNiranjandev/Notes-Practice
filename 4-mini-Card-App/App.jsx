
import UserCard from "./UserCard";

const users = [
  { id: 1, naam: "Niranjan", role: "Web Dev",    city: "Bihar",  active: true,  avatar: "👨‍💻" },
  { id: 2, naam: "Priya",    role: "Designer",   city: "Mumbai", active: true,  avatar: "👩‍🎨" },
  { id: 3, naam: "Rahul",    role: "Manager",    city: "Delhi",  active: false, avatar: "👨‍💼" },
  { id: 4, naam: "Sneha",    role: "React Dev", city: "Pune",   active: true,  avatar: "👩‍💻" },
];

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#61dafb', textAlign: 'center' }}>
        👥 Team Members
      </h1>
      <p style={{ color: '#888', textAlign: 'center' }}>
        Total: {users.length} ·
        Active: {users.filter(u => u.active).length}
      </p>

      {users.map(user => (
        <UserCard
          key={user.id}
          naam={user.naam}
          role={user.role}
          city={user.city}
          active={user.active}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
};

export default App;
