import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Weight (lbs) : </strong>{workout.weight} lbs</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p><small><strong>Created: </strong>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })} on {formatRelative(new Date(workout.createdAt), 3)}</small></p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails