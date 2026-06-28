import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({add}) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim() || !service.trim()) return 
        add ({ name, service });
        setName('');
        setService('');
    }

    return(
        <>
         <form className="queue-form" onSubmit={handleSubmit}>
            <h2> Add to queue </h2>
            <div className="form-group">
                <input placeholder="Customer name" value={name} onChange = {(e) => setName(e.target.value)} type="text" />
            </div>
            <div className="form-group">
                <select value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">Select Services</option>
                    <option value="consultation">Consultation</option>
                    <option value="payment">Payment</option>
                    <option value="support">Support</option>
                    </select>   
            </div>
            <button type="submit"> <FaUserPlus /> Add to Queue </button>
         </form>
        </>
    );
}
