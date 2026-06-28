import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateQueue = (id, newStatus) => {
    setQueue(queue.map(customer => customer.id === id ? {...customer, status:newStatus} : customer)); // if id matches, it updates the status of that customer, else it keeps the customer as it is
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id)); // if id doesn't match, it filtered into the new array of customer details
  };

  return (
    <div className="app">
      <header>
      <h1>Queue Management Application</h1>
      <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm add={addToQueue} />
        <QueueDisplay queue={queue} update={updateQueue} remove={removeFromQueue} />
      </main>
    </div>
  );
}