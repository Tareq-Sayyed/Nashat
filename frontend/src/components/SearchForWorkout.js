import { useState } from 'react';

const SearchForWorkout = () => {
    const [title, setTitle] = useState('');
    const [workout, setWorkout] = useState(null);

    // Method to handle the search of a workout
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/workouts/', {
            method: 'GET',
        });

        if (res.ok) {
            const json = await res.json();
            try {
                const filteredWorkouts = json.workouts.filter((w) => w.title === title);
                if (filteredWorkouts.length > 0) {
                    setWorkout(filteredWorkouts[0]);
                    window.reload();
                } else {
                    setWorkout(null);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };
    // Method to handle the delete of a workout { Just like in WorkoutDetails.js }
    const handleClick = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE'
        });

        const json = await response.json();
        if (response.ok) {
            console.log('Deleted Workout:', json);
            window.location.reload();
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <label>Search by title: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <button>Search Workout</button>
            {workout && (
                <div className="workout-details">
                    <h4>{workout.title}</h4>
                    <p>
                        <strong>Weight (kg):</strong> {workout.weight}
                    </p>
                    <p>
                        <strong>Sets:</strong> {workout.sets}
                    </p>
                    <p>
                        <strong>Reps:</strong> {workout.reps}
                    </p>
                    <span onClick={ handleClick } >Delete</span>
                </div>
            )}
        </form>
    );
};

export default SearchForWorkout;
