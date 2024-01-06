import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/features/auth/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Shared/Layout/Layout";
import styles from "./request.css";

const App = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async function func() {
      const user = await getUser();
      console.log(user.user);
      setUserData(user.user);
    })();
  }, []);

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.sidebar}>
          <Link to="/home">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/namehidingform">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHome} />
              <span>Profile</span>
            </div>
          </Link>
          <Link to="/request">
            <div className={styles.icon}>
              <span>Request</span>
            </div>
          </Link>
          <Link to="/finddonor">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
              <span>Find Donor</span>
            </div>
          </Link>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.card}>
            <h2 className="donorpage">Blood Request Page</h2>
            <hr className="mb-2" />

            <form className={styles.formMobile}>
              <div className="d-flex flex-wrap justify-content-evenly">
                <div className="column">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      placeholder="Enter location"
                      value={userData.location}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bloodgroup" className="form-label">
                      Blood Group:
                    </label>
                    <select
                      className="form-control"
                      id="bloodgroup"
                      name="bloodgroup"
                      value={userData.bloodgroup}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
