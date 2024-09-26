import './App.css';
import { useState } from 'react';

let nextId = 4;

function App() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("")
  const [devices, setDevices] = useState([
    {id:1, name: "iphone"},
    {id:2, name: "Mac"},
    {id:3, name: "Sam"}
    ])
  const devicesList = devices.map((divce) => {
    return(
      <li key={divce.id}>
      {divce.name} <button onClick={() => {
      handleDeleteClick(divce.id)
    }}>Delete</button>
    <button onClick={() => {
      handleEditClick(divce.id)
    }}>Edit</button>
    </li>
    )
  })

  function handleDeleteClick(id) {
    //const newDevices = [...devices]
    //let index = 0
    //let selectedIndex = 0

    //for(let divce of newDevices) {
      //if (divce.id === id) {
       // selectedIndex = index
      //}
      //index++
   // }
    //newDevices.splice(selectedIndex, 1)

    const newDevices = devices.filter((divice) => {
      return divice.id !== id
    })
    setDevices(newDevices)
  }

  function handleEditClick(id) {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        let newDevice = {...device, name: device.name + "00"}
        return newDevice
      } else {
        return device
      }
    })
    setDevices(newDevices)
  }

  function handleAddClick() {
    //const newDevices = [...devices]
   // newDevices.push(deviceNameInputValue)
    //setDevices(newDevices)
    setDevices([...devices, {id: nextId, name: deviceNameInputValue}])
    nextId = nextId + 1
  }
  return (
    <div className="App">
      <header className="App-header">
      <ul>{devicesList}</ul>
      <div>
        <input
        value={deviceNameInputValue}
        onChange={(event) => {
          setDeviceNameInputValue(event.target.value)
        }}
         type='text' />
        <button
        onClick={handleAddClick}
        >Add</button>
      </div>
      </header>
    </div>
  );
}

export default App;
