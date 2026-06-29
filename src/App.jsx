import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (patient) => {
    setQueue([...queue, { ...patient, id: Date.now(), status: "waiting" }]);
  };
  const updateQueue = (id, newStatus) => {
    setQueue(queue.map(patient => patient.id === id ? {...patient, status:newStatus} : patient)); // if id matches, it updates the status of that patient, else it keeps the patient as it is
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter(patient => patient.id !== id)); // if id doesn't match, it filtered into the new array of patient details
  };

  return (
    <div className="app">
      <header>
      <h1>Hospital Queue Management Application</h1>
      <p>Manage your patient queue efficiently</p>
      </header>
      <main>
        <QueueForm add={addToQueue} />
        <QueueDisplay queue={queue} update={updateQueue} remove={removeFromQueue} />
      </main>
    </div>
  );
}