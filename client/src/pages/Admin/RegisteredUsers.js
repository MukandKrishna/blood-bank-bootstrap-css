import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";
import styles from "./RegisteredUsers.module.css";
import styles1 from "../auth/namehide.module.css";
import homeIcon from "../auth/home_icon.png";
import profileIcon from "../auth/profile_icon.png";
import requestIcon from "../auth/request_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const RegisteredUsers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout>
      {/* Sidebar toggle button */}
      <div className={styles1.menuToggle} onClick={toggleSidebar}>
        &#9776;
      </div>
      <div
        className={`${styles1.sidebar} ${
          isSidebarOpen ? styles1.open : styles1.closed
        }`}
      >
        <Link to="/" onClick={toggleSidebar}>
          <div className={styles1.icon}>
            <img src={homeIcon} alt="Home" className={styles1.iconImage} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/profile" onClick={toggleSidebar}>
          <div className={styles1.icon}>
            <img src={profileIcon} alt="Profile" className={styles1.iconImage} />
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/request" onClick={toggleSidebar}>
          <div className={styles1.icon}>
            <img src={requestIcon} alt="Request" className={styles1.iconImage} />
            <span>Request</span>
          </div>
        </Link>
        <Link to="/donor" onClick={toggleSidebar}>
          <div className={styles1.icon}>
            <FontAwesomeIcon icon={faSearch} />
            <span>Donor</span>
          </div>
        </Link>
      </div>

      <div className={styles.container}>
        <h3 className={styles.header}>Registered Users</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Nukh</th>
                <th>Akaah</th>
                <th>Blood Group</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: "Mark", email: "mark@gmail.com", nukh: "mdo", akaah: "mdo", bloodGroup: "O+" },
                { id: 2, name: "Jacob", email: "jacob@gmail.com", nukh: "jac", akaah: "jac", bloodGroup: "A+" },
                { id: 3, name: "Larry", email: "larry@gmail.com", nukh: "lar", akaah: "lar", bloodGroup: "B+" },
                { id: 4, name: "John", email: "john@gmail.com", nukh: "joh", akaah: "joh", bloodGroup: "AB-" }
              ].map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.nukh}</td>
                  <td>{user.akaah}</td>
                  <td>{user.bloodGroup}</td>
                  <td>
                    <button type="button" className={styles.buttonApprove}>Approve</button>
                    <button type="button" className={styles.buttonReject}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default RegisteredUsers;
