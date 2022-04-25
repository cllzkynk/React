import React from "react";

const Jsx = () => {
  const isAdmin = true;

  return (
    <div>
      {isAdmin ? (
        <div>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </div>
      ) : (
        <>
          <h2>User Menu</h2>
          <ul>
            <li>Create Review</li>
            <li>Update Review</li>
          </ul>
        </>
      )}

      {/*  Bu bir comment */}
    </div>
  );
};

const test1 = () => {
    return(
        <>Test1</>
    )
}

const test2 = () => {
    return(
        <>Test2</>
    )
}
export default Jsx;
export {test1, test2};
