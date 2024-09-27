import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';
import Hello from './Components/Hello';
import Messsage from './Components/Message';
function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <Hello name = 'susruthi' lastname = 'kanaparthi'/>
      <Messsage />
      <MovieList />
    </div>
  );}
export default App;
