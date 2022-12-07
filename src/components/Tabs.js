import React, { useEffect, useState } from 'react';
import { FaHome, FaDatabase, FaInfo, FaDelicious } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import NaveParmeter from "../../src/components/navigationClass.js";

function Tabs() {
  let navigate = useNavigate();
  const [active, setActive] = useState('home');
  const handleHomeTab = (e, url, tab_url) => {
    NaveParmeter.tabActive = tab_url;
    setActive(tab_url);

    if (url !== "back") {
      navigate(url);
    } else {
      if (window.location.pathname !== "/Page_2") {
        navigate(-1);
      }
    }
  }

  useEffect(() => {
    setActive(NaveParmeter.tabActive);
  }, [active])

  return (
    <div className='tab-block'>
      <div className='main-block'>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            {/* <Link to="/tabs/tabsrouters"> */}
            <button className={`nav-link active_btn ${active == 'home' ? "active" : ""}`} id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e) => handleHomeTab(e, "/Page_2", "home")}><FaHome /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/tabs/tabsrouters/Page_10"> */}
            <button className={`nav-link active_btn ${active == 'database' ? "active" : ""}`} id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_10", "database")}><FaDatabase /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/Page_11"> */}
            <button className={`nav-link active_btn ${active == 'delicius' ? "active" : ""}`} id="pills-info-tab" data-toggle="pill" data-target="#pills-info" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_11", "delicius")}><FaDelicious /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            {/* <Link to="/Page_8"> */}
            <button className={`nav-link active_btn ${active == 'info' ? "active" : ""}`} id="pills-menu-tab" data-toggle="pill" data-target="#pills-menu" type="button" role="tab" aria-controls="pills-menu" aria-selected="false" onClick={(e) => handleHomeTab(e, "/Page_8", "info")}><FaInfo /></button>
            {/* </Link> */}
          </li>
          <li className="nav-item" role="presentation">
            <button className={`nav-link active_btn ${active == 'back' ? "active" : ""}`} id="pills-logout-tab" type="button" data-toggle="pill" data-target="#pills-layout" role="tab" aria-controls="pills-layout" aria-selected="false" onClick={(e) => handleHomeTab(e, "back", "back")}><RiArrowGoBackFill /></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Tabs;