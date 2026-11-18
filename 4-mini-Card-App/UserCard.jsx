
const UserCard = ({ naam, role, city, active, avatar }) => {
  return (
    <div style={{
      background: '#1a1a2e',
      border: `1px solid ${active ? '#3fb950' : '#f78166'}`,
      borderRadius: '12px',
      padding: '16px',
      margin: '8px'
    }}>
      <div style={{ fontSize: '40px', textAlign: 'center' }}>
        {avatar}
      </div>
      <h3 style={{ color: '#61dafb', textAlign: 'center' }}>
        {naam}
      </h3>
      <p style={{ color: '#aaa', textAlign: 'center', fontSize: '13px' }}>
        {role} · {city}
      </p>
      <p style={{ textAlign: 'center', marginTop: '8px' }}>
        {active
          ? <span style={{ color: '#3fb950' }}>● Active</span>
          : <span style={{ color: '#f78166' }}>● Inactive</span>
        }
      </p>
    </div>
  );
};

export default UserCard;
