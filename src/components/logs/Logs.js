import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import LogItem from './LogItem'
import PreLoader from '../layout/PreLoader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

export const Logs = ({ log: { logs, loading}, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader/>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Restaurant Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (<p className="center">No Logs To Show</p>) : logs.map(log => <LogItem log={log} key={log.id}/>)}
    </ul>
  );
};

Logs.protoTypes = {
  log: PropTypes.object.isRequired,
  getLogs : PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs);
