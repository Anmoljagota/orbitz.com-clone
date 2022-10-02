import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Pages/Navbar';
import Particulardata from './Pages/Particulardata';
import Signup from './components/Signup';
import PaymentPage from './PaymentPage/PaymentPage';
function App() {
  return (
   <div className="App">
      <Navbar/> 
      {/* <Particulardata/>  */}
     <AllRoutes/>
      {/* <Signup/>
    <PaymentPage/> */}
    </div>
  );
}

export default App;
