import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    // It is null because if the res.ok is data itll be set to true else itll be false.
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('/api/workouts');
            const data = await res.json();
            console.log('Data:', data); // Add this console log
            if (res.ok) {
                setWorkouts(data.workouts);
                console.log('Updated Workouts:', workouts); // Add this console log
            }
            
        };
    
        fetchWorkouts();
    }, []);
    
    console.log('Workouts:', workouts); // Add this console log
    

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={ workout._id } workout={ workout } />
                ))}
            </div>

            <WorkoutForm />
        </div>

     );
}
 
export default Home;