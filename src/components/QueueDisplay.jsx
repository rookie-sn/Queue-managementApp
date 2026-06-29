
function QueueDisplay({ queue, update, remove }) {

    const getStatusColor = (status) => {
        switch (status) {
            case 'waiting':
                return "var(--warning)";
            case "serving":
                return "var(--success)";
            case "completed":
                return "var(--info)";
            default:
                return "var(--text)";
                    
        }
    }
  return(
    <div className="queue-display">
        <h2>Queue Display</h2>
       {queue.length === 0 ? (
        <p className="empty-queue">No patients in the queue</p>
       ) : (
            <div className="queue-list">
                {queue.map((patient) => (
                    <div className="queue-item" key={patient.id}>
                        <div className="patient-info">
                            <h3>{patient.name}</h3>
                            <p>Service: {patient.service}</p>
                            <span className="status" style={{ color: getStatusColor(patient.status) }}>
                                {patient.status}
                            </span>
                        </div>
                        <div className="actions">
                            {patient.status === 'waiting' && (
                                <button className="serve-btn" onClick={() => update(patient.id, 'serving')}>
                                    Serve
                                </button>
                            )}
                                {patient.status ==='serving' && (
                                    <button className="complete-btn" onClick={()=> update(patient.id, 'completed')}>Complete</button>
                                )}
                                <button className="remove-btn" onClick={() => remove(patient.id)}>Remove</button>
                            </div>
                    </div>
                ))}
            </div>
       )}
    </div>
  );
}

export default QueueDisplay; 