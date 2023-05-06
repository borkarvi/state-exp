import './App.css';
import TestOne from "./components/TestOne";
import UserTable from "./components/UserTable";

function App() {   
    const numArr = [0,1,2,3,4,5,6,7,8,9];

    const myFunOne= (testBt) => {
        console.log('from my Func' , testBt);
    };
    const newElems = numArr.map(
        (elem) => {
            console.log('elem',elem)
            return  (<TestOne btName={elem}
                funName={myFunOne}/>);    
        }
    );
  return (
      <div className="main">   
       {/* {newElems} */}
       <UserTable />
     </div>
    );
}
export default App;
