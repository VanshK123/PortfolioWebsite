import './App.css';
import TitleBar from './TitleBar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Taskbar from './Taskbar';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className='main'>
        <Sidebar />
        <Taskbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
