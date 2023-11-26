import "./App.css"

const App = () => {



  function adddnum(){
    var x = Number(document.getElementById("t1").value)
    var y = Number(document.getElementById("t2").value)


    var a = document.getElementById("show")

    a.innerText=`hey ${x+y}`



  }
  return (
    <div>


    <label htmlFor="t1">add number 1:</label>
    <input type="text" id="t1" />
    <label htmlFor="t2"> add number 2:</label>
    <input type="text" id="t2"/>
    <button onClick={()=>adddnum()}>Add</button>
    <p id="show">show</p>




    </div>
  )
}

export default App