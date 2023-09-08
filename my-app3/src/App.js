import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <>
    {/* <ExpenseItem date = "10th sept 2023" title = "hotel" price = "199" /> */}
    <ParentComponent/>
    </>
  );
}

export default App;
