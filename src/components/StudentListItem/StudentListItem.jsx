import StudentScore from '../StudentResult/StudentScore'
import StudentDate from '../StudentResult/StudentDate'
import './StudentListItem.css'

export default function StudentListItem(props) {
    return (
        <div className="studentList">
            <div className="">
                <div>Name: {props.name}</div>
                <div>Bio: {props.bio}</div>

                <h3>RESULTS:</h3>
                <table className="center">
                    <tr>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>
                            {props.scores.map(score => (
                            <StudentDate {...score} />
                            ))}
                        </td>
                        
                        <td>
                            {props.scores.map(score => (
                            <StudentScore {...score} />
                            ))}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}