import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
        likes={111}
        messages={222}
        shares={333}
        
        />
        <Video 
        likes={444}
        messages={555}
        shares={666}
        
        />
      </div>
    </div>
  );
}

export default App;
