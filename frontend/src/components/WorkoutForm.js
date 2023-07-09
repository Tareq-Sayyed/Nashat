import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutForm = () => {
    const { user } = useAuthContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if(!user){  
            setError("Please login");
            return;
        }
        // Create a workout object
        const workout = { title, reps, sets, weight }; 
        // Send the workout object to the server
        const res = await fetch('https://nashat.onrender.com/api/workouts', {
            method: 'POST',
            // To tell the server that we are sending JSON data
            headers: { "Content-Type": "application/json",
                        "Authorization": `Bearer ${user.token}`
            },
            // Convert the workout object to a JSON string
            body: JSON.stringify(workout) 
        });

        const json = await res.json();
        if(!res.ok){
            setError(json.error);
        }
        if(res.ok){
            setTitle('');
            setReps('');
            setSets('');
            setWeight('');
            setError(null);
            console.log('Workout added!');
        }
    }
    return (  
        <form className="create" onSubmit={ handleSubmit }>
            <h3>Add a new Workout:</h3>

            <label>Exercise: </label>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required 
            />
        
            <label>Weight (Kg): </label>
            <input 
                type="number" 
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                required 
            />

            <label>Reps: </label>
            <input 
                type="number" 
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                required 
            />

            <label>Sets: </label>
            <input 
                type="number" 
                onChange={(e) => setSets(e.target.value)}
                value={sets}
                required 
            />
            <button>Add Workout</button>

            {error && 
                <div className = "error" >{ error }</div>
            }
        </form>
    );
}
export default WorkoutForm;