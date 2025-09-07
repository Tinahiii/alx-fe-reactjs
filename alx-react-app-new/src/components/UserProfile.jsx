

const UserProfile = (props) => {
  return (
     <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', marginTop: '8px' }}>Bio: {props.bio}</p>
  
    </div>
  );
};

export default UserProfile;
