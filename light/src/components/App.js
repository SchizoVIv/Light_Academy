import './App.css';
import Header from './Header/Header';
import Academy from './Academy/Academy';
import Requests from './Requests/Requests';
import Advantages from './Advantages/Advantages';
import Coaching from './Coaching/Coaching';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Academy/>
        <Requests/>
        <Advantages/>
        <Coaching/>
      </main>
    </>
  );
}

export default App;
