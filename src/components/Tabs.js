import React from 'react';
import { FaHome, FaDatabase, FaInfo, FaDelicious } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

function Tabs() {
  let navigate = useNavigate();
  const handleHomeTab = (e, url) => {
    document.querySelectorAll(".active_btn").forEach(itm => {
      itm.classList.remove("active");
    })
    e.target.parentNode.classList.add("active");

    navigate(url);

  }

  return (
    <div className='tab-block'>
      <div className='main-block'>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            {/* <Link to="/tabs/tabsrouters"> */}
            <button className="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => navigate("/Page_2")}><FaHome /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/tabs/tabsrouters/Page_10"> */}
            <button className="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => navigate("/Page_10")}><FaDatabase /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/Page_11"> */}
            <button className="nav-link" id="pills-info-tab" data-toggle="pill" data-target="#pills-info" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => navigate("/Page_11")}><FaDelicious /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/Page_8"> */}
            <button className="nav-link" id="pills-menu-tab" data-toggle="pill" data-target="#pills-menu" type="button" role="tab" aria-controls="pills-menu" aria-selected="false" onClick={() => navigate("/Page_102")}><FaInfo /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-logout-tab" type="button" onClick={() => navigate(-1)}><ImExit /></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Tabs;