function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '15px', 
      margin: '15px', 
      borderRadius: '8px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.2)'
    }}>
      <h2 style={{ 
        color: 'blue', 
        fontSize: '24px', 
        marginBottom: '5px' 
      }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
