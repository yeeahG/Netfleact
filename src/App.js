import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';


function App() {
  return (
    <div className="App">
      {/* Nav 부분 */}
      <Nav/>
      {/* Banner 부분 */}
      <Banner/>
      {/* Row 부분*/}
      <Row/>
    </div>
  );
}

export default App;
