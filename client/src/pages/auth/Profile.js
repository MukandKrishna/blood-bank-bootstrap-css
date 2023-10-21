// Profile.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/features/auth/authActions"; // Adjust the import path accordingly
const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Adjust the state shape if needed
  const [userData, setUserData] = useState({ ...user });

  useEffect(() => {
    setUserData(getUser)
    console.log("Dispatching getUser");
    // dispatch(getUser());
  }, [dispatch]);

  console.log("User from Redux store: ", user);
  console.log("Local UserData state: ", userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData));
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userData.name || ""} />
        </label>
        <label>
          Father Name:
          <input type="text" name="fname" value={userData.fname || ""} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email || ""} />
        </label>
        <label>
          Blood Group:
          <input
            type="text"
            name="bloodgroup"
            value={userData.bloodgroup || ""}
          />
        </label>
        <label>
          Blood Donated Date:
          <input
            type="date"
            name="donateddate"
            value={userData.donateddate || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Nukh:
          <input type="text" name="nukh" value={userData.nukh || ""} />
        </label>
        <label>
          Akaah:
          <input type="text" name="akaah" value={userData.akaah || ""} />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={userData.contact || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
