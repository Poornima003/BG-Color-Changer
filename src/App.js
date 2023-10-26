import './App.css';
import Buttons from './components/Buttons';

function App() {
  const btnStyle = {padding:'10px', backgroundColor:'black', color:'white', borderRadius:'10px', margin:'30px'}

  return (
    <>
      <div className='main'>
        <h2>Background Color Changer</h2> 
        
      </div>
      <Buttons/>
      
          
    </>
  );
}

export default App;
