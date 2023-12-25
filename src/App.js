import './App.css';
import TitleBar from './TitleBar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Taskbar from './Taskbar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className='main'>
        <Sidebar />
        <div className='main-content'>
          <Taskbar />
          <HomePage />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
