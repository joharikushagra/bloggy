import React from 'react'
import '../styles/SideDisplay.css';
import {FaSearch} from 'react-icons/fa';

function SideDisplay() {
    return (
        <div className="display__container">
        <div className="display__search">
        <span className="display__searchIcon"><FaSearch/></span><input className="display__searchInput" placeholder="Search questions with keywords"/>
        </div>
        <div className="display__content"></div>
          <h2 className="display__contentHead">Top Searched Items</h2>
            <ul className="display__contentList">
                <li>lorem ipsum dolow</li>
                <li>New practise set Java</li>
                <li>New practise set Python</li>
                <li>Interview preparation Amazon</li>
                <li>Interview preparation Microsoft</li>
                <li>lorem ipsum dolow</li>
                <li>New practise set Java</li>
                <li>New practise set Python</li>
                <li>Interview preparation Amazon</li>
                <li>Interview preparation Microsoft</li>
                <li>lorem ipsum dolow</li>
                <li>New practise set Java</li>
                <li>New practise set Python</li>
                <li>Interview preparation Amazon</li>
                <li>Interview preparation Microsoft</li>
            </ul>
        </div>
    )
}

export default SideDisplay
