

function App() {
  return (
    <div>
      <h1>Welcome to ALX React App</h1>

      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys cooking and coding" 
      />
    </div>
  );
}

export default App;

