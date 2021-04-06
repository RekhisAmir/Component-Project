import './App.css';
import Address from './Component/profile/Address';
import FullName from './Component/profile/FullName';
import ProfilPhoto from './Component/profile/ProfilPhoto';
import './style.css';
function App() {
  return (
    <div className="App">
     <ProfilPhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
