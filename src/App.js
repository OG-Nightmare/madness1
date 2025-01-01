import Navbar from "./components/Nav";  
import Restocards from "./components/Restocards";


function App() {
    return (
      <>
        <Navbar />
        <div className="holder"><Restocards/></div>
        </>
    );
}

export default App;
