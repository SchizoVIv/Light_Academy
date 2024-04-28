import './App.css';
import Header from './Header/Header';
import Academy from './Academy/Academy';
import Requests from './Requests/Requests';
import Advantages from './Advantages/Advantages';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Academy/>
        <Requests/>
        <Advantages/>
      </main>
    </>
  );
}

export default App;
