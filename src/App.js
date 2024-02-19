import logo from './logo.svg';
import './App.css';

function App() {
  const student={name :"omar",age : 20 , gpa : 4}
  return (
    <div className="App">
     <h1>{student.name}</h1>
     <h2>{student.age}</h2>
     <h3>{student.gpa}</h3>
    </div>
  );
}

export default App;
