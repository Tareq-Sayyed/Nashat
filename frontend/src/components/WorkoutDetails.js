import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';
const WorkoutDetails = ({ workout }) => {

    const { user } = useAuthContext();
    // A function to delete the workout.
    const handleClick = async () => {

        if(!user){
            return;
        }
        const response = await fetch(`https://nashat.onrender.com/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {  "Authorization": `Bearer ${user.token}`}
        });
        const json = await response.json();
        if (response.ok) {
            console.log('Deleted Workout:', json);
            window.location.reload();
        }
        else {
            console.log('Failed to delete workout:', json);
        }
    }
    
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Weight (kg):</strong> {workout.weight}</p>
            <p><strong>Sets:</strong> {workout.sets}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className = "material-symbols-outlined" onClick={ handleClick } >delete</span>
        </div>
     );
}
 
export default WorkoutDetails;