import React from 'react';
import StudentListItem from "../StudentListItem/StudentListItem";

export default function StudentList(props) {
    return (
        <div>
            {props.students.map(student => (
                <StudentListItem {...student} />
            ))}
        </div>
    )
}