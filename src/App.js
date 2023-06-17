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
        name="alanxn_"
        description="Gato achando que é o muralha" 
        music="Música do gatinho" 
        url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"   
        />
        <Video 
        likes={444}
        messages={555}
        shares={666}
        name="luan_"
        description="Gato doido" 
        music="Música do gatinho"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        
        />
      </div>
    </div>
  );
}

export default App;
