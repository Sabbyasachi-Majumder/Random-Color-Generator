import './App.css';      //css sheet for this app 
import ColorGeneratorF from './Components/ColorGeneratorF';  //including the ColorGeneratorF 

const App = () => {    //Main function for the react app
  return (
    <div className="App">          {/**Container the full webpage */}
      <div className="body">        {/**Container the main code */}
        <header className="header">Random Color Generator using React</header>   {/**Container the header */}
        <ColorGeneratorF></ColorGeneratorF>  {/**Calling the functional component for the bulk of code */}
      </div>
    </div>
  );
}

export default App;
