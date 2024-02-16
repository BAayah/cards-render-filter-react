import { useState } from "react";
import { User } from "./components/User";
import { employees } from "./data";


function App() {
  const [status, setStatus] = useState("EMPLOYEES")  

  const renderUser = () => {
    switch(status){
      case "EMPLOYEES":
        let arr = employees.filter((el) => {
          return el.status == "EMPLOYEES"
        })
        return arr.map((el,id) => {
          return<User el={el} key={id} />
        })

      case "MANAGERS":
        let arr2 = employees.filter((el) => {
          return el.status == "MANAGERS"
        })
        return arr2.map((el,id) => {
          return<User el={el} key={id} />
        })

      case "ADMINS":
        let arr3 = employees.filter((el) => {
          return el.status == "ADMINS"
        })
        return arr3.map((el,id) => {
          return<User el={el} key={id} />
        })
    }
  }
  
  // const switchStatus = () => {
  //   setStatus(!status)
  // }
  return (
    <div className="App">
      <div className="btns-group">
        <button className="btn" onClick={() => setStatus("EMPLOYEES")}>Show employees</button>
        <button className="btn" onClick={() => setStatus("MANAGERS")}>Show managers</button>
        <button className="btn" onClick={() => setStatus("ADMINS")}>Show admins</button>
      </div>

      <div className="container">
        {renderUser()}
      </div>
    </div>
  );
}

export default App;
