import React from 'react';

const register = (props) => {
  return (
    <div>
    Registration Page

      <form>
        <label>
          First Name:
          <input type="text" name="fname" /> <br />
          Last Name:
          <input type="text" name="lname" /> <br />
          Username:
          <input type="text" name="username" /> <br />
          Email:
          <input type="text" name="email" /> <br />
          Password:
          <input type="text" name="password" /> <br />

        </label>
        <input type="submit" value="Register" />
      </form>


    </div>
  )
};

export default register;
