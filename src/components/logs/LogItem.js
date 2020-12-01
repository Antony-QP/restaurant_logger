import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  return (
    <div className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${log.return ? "green-text" : "red-text"}`}>
          {log.name}
        </a>
        <span> in {log.location}</span>
        <span className='black-text'> - {log.rating}/10</span>
        <br />
        <span className='grey-text'>
          <span className='black-text'></span>Last updated on <Moment format='MMMM Do YYYY, h:mm:ss a'/>{log.date}
        </span>
        <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
