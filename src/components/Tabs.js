import React from 'react';
import { FaHome, FaDatabase, FaInfo, FaDelicious } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

function Tabs() {
  let navigate = useNavigate();
  const handleHomeTab = (e, url, back = false) => {
    if (back) {
      document.querySelectorAll(".active_btn").forEach(item => {
        item.classList.remove('active');
      })
      e.target.parentNode.parentNode.classList.add("active");
      e.target.style.fill = "#f8992a";
      // document.querySelector(".active_btn.active svg").style.fill = "#f8992a";
      // e.target.parentNode.style.fill = "#f8992a";
      setTimeout(() => {
        e.target.style.fill = "#fff";
        e.target.parentNode.style.fill = "#fff";
        e.target.parentNode.parentNode.classList.remove("active");
        document.querySelector("#pills-home-tab").classList.add("active");
      }, 400);
    }
    navigate(url);
    // // navigate("/Page_102");
    // document.querySelectorAll(".active_btn").forEach(itm => {
    //   itm.style.fill = "#fff";
    // });
    // setTimeout(() => {
    //   document.querySelector(".active_btn.active").style.fill = "green !important";
    // }, 300)
  }

  return (
    <div className='tab-block'>
      <div className='main-block'>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            {/* <Link to="/tabs/tabsrouters"> */}
            <button className="nav-link active_btn active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e) => handleHomeTab(e, "/Page_2")}><FaHome /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/tabs/tabsrouters/Page_10"> */}
            <button className="nav-link active_btn" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_10")}><FaDatabase /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/Page_11"> */}
            <button className="nav-link active_btn" id="pills-info-tab" data-toggle="pill" data-target="#pills-info" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_11")}><FaDelicious /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/Page_8"> */}
            <button className="nav-link active_btn" id="pills-menu-tab" data-toggle="pill" data-target="#pills-menu" type="button" role="tab" aria-controls="pills-menu" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_102")}><FaInfo /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active_btn" id="pills-logout-tab" type="button" data-toggle="pill" data-target="#pills-layout" role="tab" aria-controls="pills-layout" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_2", true)}><ImExit /></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Tabs;