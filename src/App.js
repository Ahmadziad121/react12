import logo from './logo.svg';
import './App.css';
import Car from './Car';
import a from './le.png';
import b from './bm.jpg';
import c from './lam.jpg';
import d from './mer.avif';
function App() {
  return (
    <div className="App"><div className='one'><div className='le'>
    <Car brand="Lexus" imge={a} discription="Lexus is the luxury vehicle division of the Japanese automaker Toyota Motor Corporation." color="black"/></div>
     <div className='bm'>
    <Car brand="BMW" imge={b}discription="The history of the BMW Group reaches back to 1916. Today, the four brands BMW, MINI, Rolls-Royce, and BMW Motorrad make the BMW Group one of the world’s .  " color="cyan"/></div>
    </div><div className='tow'>
     <Car brand="Lamborghini" imge={c} discription="is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese." color="RED"/>
    <Car brand="mercedes" imge={d} discription="Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926." color="WHITE"/>
    </div>
    </div>
  );
}

export default App;
