import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import SearchForWorkout from "../components/SearchForWorkout";

const Home = () => {
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
    });
    
    if (!workouts) {
      return <div>Loading...</div>;
    }
    return ( 
        <div className="home">
          <SearchForWorkout />
          
          { workouts.length >= 0 && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}


          <WorkoutForm />
        </div>

     );
}
 
export default Home;