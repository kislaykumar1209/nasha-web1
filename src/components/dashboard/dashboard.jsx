import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { allUser, clearErrors } from "../../actions/actions";
import Dash from "./dash";
import "./dashboard.css";
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useHistory()

  const { error, people, peopleCount,totalMale,totalFemale } = useSelector((state) => state.people);
  const {isAuthenticated}=useSelector((state)=>state.user)

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if(!isAuthenticated){
      navigate.push('/')
    }
    dispatch(allUser(people, peopleCount,totalMale,totalFemale));
  }, [dispatch, error, allUser]);

  return (
    <div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>
          {/* <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class="bx bx-search"></i>
          </div> */}
          <div class="profile-details">
            <span class="admin_name">Super Admin</span>
            <i class="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Registeration</div>
                {/* <div class="number">{people && peopleCount  }</div> */}
                <div class="number">{people && peopleCount  }</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  {/* <span class="text">Up from yesterday</span> */}
                </div>
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Number of Males</div>
                <div class="number">{people && totalMale  }</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  {/* <span class="text">Up from yesterday</span> */}
                </div>
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Number of Female</div>
                <div class="number">{people && totalFemale  }</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  {/* <span class="text">Up from yesterday</span> */}
                </div>
              </div>
              <i class="bx bx-cart cart three"></i>
            </div>
            {/* <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Return</div>
            <div class="number">11,086</div>
            <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div>
          </div>
          <i class='bx bxs-cart-download cart four' ></i>
        </div> */}
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Recent Sales</div>
              <div class="sales-details">

                <ul class="details">
                  <li class="topic">Name</li>
                    {people && people.map((user)=><li>  <a href="#">{user.name}</a></li>)}
                </ul>
                <ul class="details">
                  <li class="topic">Age</li>
                  {people && people.map((user)=><li>  <a href="#">{user.age}</a></li>)}
                </ul>
                <ul class="details">
                  <li class="topic">Gender</li>
                  {people && people.map((user)=><li>  <a href="#">{user.gender}</a></li>)}
                </ul>
                <ul class="details">
                  <li class="topic">Ward</li>
                  {people && people.map((user)=><li>  <a href="#">{user.ward}</a></li>)}
                </ul>
                <ul class="details">
                  <li class="topic">Address</li>
                  {people && people.map((user)=><li>  <a href="#">{user.address}</a></li>)}
                </ul>
                <ul class="details">
                  <li class="topic">Eduation</li>
                  {people && people.map((user)=><li>  <a href="#">{user.education}</a></li>)}
                </ul>
                <ul class="details">
                  <li class="topic">Mobile no</li>
                  {people && people.map((user)=><li>  <a href="#">{user.number}</a></li>)}
                </ul>
             
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
