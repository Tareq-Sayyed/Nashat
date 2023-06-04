import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
    // A function to delete the workout.
    const handleClick = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE'
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