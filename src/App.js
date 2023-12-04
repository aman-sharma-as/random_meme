import logo from './logo.svg';
import './App.css';
import RandomGif from './Components/RandomGif';
import Tag from './Components/Tag';

function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className='mt-5 w-11/12 border text-center bg-white rounded-lg px-10 py-2 text-3xl font-bold '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <RandomGif/>
      <Tag/>
      </div>
     
    </div>
  );
}

export default App;
