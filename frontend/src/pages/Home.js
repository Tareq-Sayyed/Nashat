import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");

  const { user } = useAuthContext();
  
  const fetchWorkouts = async () => {
    const res = await fetch("/api/workouts", {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const data = await res.json();
    if (res.ok) {
      setWorkouts(data.workouts);
      console.log("Updated Workouts:", workouts);
    }
    setIsLoading(false);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        if(user){
          fetchWorkouts();
        }
      }, 2000);
      return () => clearTimeout(timer); 
    }, [user]);
  
  // This useEffect is used to fetch the workouts from the database and update the workouts state
  useEffect(() => {
    if(user){
      fetchWorkouts();
    }
    console.log(workouts);
  }, [workouts, user]);

  if (isLoading) {
    return (
      <div class="socket">
        <div class="gel center-gel">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c1 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c2 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c3 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c4 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c5 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c6 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c7 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c8 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c9 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c10 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c11 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c12 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c13 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c14 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c15 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c16 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c17 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c18 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c19 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c20 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c21 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c22 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c23 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c24 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c25 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c26 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c28 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c29 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c30 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c31 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c32 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c33 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c34 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c35 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c36 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c37 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const filteredWorkouts = workouts.filter((w) => w.title === title);
    if (filteredWorkouts.length > 0) {
      setWorkouts(filteredWorkouts);
    } else {
      fetchWorkouts();
    }
  };

  const getAllWorkouts = async () => {
    fetchWorkouts();
  }

  return (
    <div className="home">
      <form className="create" onSubmit={handleSubmit}>
        <label>Search by title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Search Workout</button>
        <button onClick={ getAllWorkouts }>See all workouts</button>
      </form>

      {
        workouts && workouts.length > 0 ? (
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))
        ) : (<div className="error"><p>No workouts found.</p></div>)
      }
      
      
      <WorkoutForm fetchworkout={fetchWorkouts} />
    </div>
  );
};

export default Home;
