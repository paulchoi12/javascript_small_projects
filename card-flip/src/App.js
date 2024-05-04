import Box from './Components/Box';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Hello World</h1>
      </div>
      <div className='grid'>
        <Box src="/Photos/York.jpeg" Text="York Station"/>
        <Box src="/Photos/2.jpeg" Text="Wodden Dolls"/>
        <Box src="/Photos/3.jpeg" Text="Castle"/>
        <Box src="/Photos/1.jpeg" Text="Shambles Market"/>
        <Box src="/Photos/5.jpeg" Text="Harry Potter"/>
        <Box src="/Photos/4.jpeg" Text="York City Mark"/>
      </div>
    </div>
  );
}

export default App;
