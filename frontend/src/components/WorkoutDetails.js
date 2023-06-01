import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();
    const handleClick = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE'
        });

        const json = await response.json();
        if (response.ok) {
            console.log('Deleted Workout:', json);
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
            window.location.reload();
        }


    }
    
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Weight (kg):</strong> {workout.weight}</p>
            <p><strong>Sets:</strong> {workout.sets}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={ handleClick } >Delete</span>
        </div>
     );
}
 
export default WorkoutDetails;