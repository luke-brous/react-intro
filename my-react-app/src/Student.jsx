// This is an example of using props in a Student component

// props is an object that holds the values passed from the parent component.
// propTypes is a mechanism that ensures the props passed to a component 
// are of the correct type.
// defaultProps can be defined to set default values for props
//  if they are not provided.

import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="m-4 text-lg font-serif p-4 border-2 rounded border-gray-400 ">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Status: {props.isStudent ? "Student" : "Not a Student"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student;