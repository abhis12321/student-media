import { useAuth } from "mongo/AuthProvider";
import { useRouter } from "next/navigation";

export default function Student({ student }) {
  let USER = useAuth();
  let router = useRouter();

  const handleDelete = async (id) => {
    if(!USER.user) {
        alert(`you haven't logged-in...!`)
    }
    else if (USER.user && USER.user.email != student.email) {
      alert(`You can not delete any account of others...!`);
    } else if (
      USER.user &&
      USER.user.email == student.email &&
      confirm("Are you sure you wanna delete this account...?")
    ) {
      let del = await fetch(`${currUrl}/api/mongo/form2/${id}`, {
        method: "delete",
        body: JSON.stringify(id),
      })
        .then((res) => res.json())
        .catch((err) => {
          success: false;
        });
      if (del.success) {
        alert("The user is been deleted...!");
      } else {
        alert("Sorry, the user is not been deleted...!");
      }
      getData();
    }
  };

  const handleUpdate = () => {
    if(!USER.user) {
        alert(`you haven't logged-in...!`)
    }
    else if (USER.user && USER.user.email != student.email) {
        alert(`You can not update any account of others...!`);
    }
    else if(USER.user && USER.user.email == student.email) {
        router.push(`/form2/${student._id}`)
    }
  }

  return (
    <div key={student._id} className="student">
      <p className="student-info">
        <span>Email: </span>
        {student.email}
      </p>
      <h2 className="student-info">
        <span>Name: </span>
        {student.name}
      </h2>
      <h2 className="student-info">
        <span>Age: </span>
        {student.age}
      </h2>
      <h2 className="student-info">
        <span>Gender: </span>
        {student.gender}
      </h2>
      <h2 className="student-info">
        <span>Address: </span>
        {student.address}
      </h2>
      <h2 className="student-info">
        <span>City: </span>
        {student.city}
      </h2>
      <h2 className="student-info">
        <span>State: </span>
        {student.state}
      </h2>
      <h2 className="student-info">
        <span>Pin code: </span>
        {student.pin_code}
      </h2>
      <h2 className="student-info">
        <span>University: </span>
        {student.university}
      </h2>
      <h2 className="student-info">
        <span>Course: </span>
        {student.course}
      </h2>
      <h2 className="student-info">
        <span>Branch: </span>
        {student.branch}
      </h2>
      <h2 className="student-info">
        <span>Semester: </span>
        {student.semester}
      </h2>
      <div className="change">
        <button
          className="change-update change-tag"
          onClick={handleUpdate}
        >
          update
        </button>
        {/*Scroll will go to the top of the new page*/}
        {/* <Link href={`/form2/${student._id}`} className='change-update change-tag' scroll={false}> update </Link>               Scroll will go to the top of the new page */}
        {/* <Link href={`/form2#${student._id}`} className='change-update change-tag'> update </Link> */}{" "}
        {/*Scroll will remain same in new page*/}
        <button
          onClick={() => handleDelete(student._id)}
          className="change-delete change-tag"
        >
          delete
        </button>
      </div>
    </div>
  );
}
