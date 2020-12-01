import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux'
import { addLog } from '../../actions/logActions'
import PropTypes from 'prop-types'


export const AddLogModal = ({ addLog }) => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [comment, setComment] = useState("");
  const [toreturn, setToreturn] = useState(false);

  const onSubmit = () => {
    if (
      name === "" ||
      cuisine === "" ||
      location === "" ||
      rating === "" ||
      service === "" ||
      price === "" ||
      comment === "" ||
      toreturn === null
    ) {
      M.toast({ html: "Please enter all fields" });
    } else {
      const newLog = {
      name : name,
      cuisine : cuisine,
      location : location,
      rating : rating,
      service : service,
      price : price,
      comment : comment,
      toreturn : toreturn,
      date: new Date()
      }

      addLog(newLog)

      M.toast({ html : "Log added"})
      //   clearfields
      setName("");
      setCuisine("");
      setLocation("");
      setRating("");
      setService("");
      setPrice("");
      setComment("");
      setToreturn(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modaleStyle}>
      <div className='modal-content'>
        <h4>Enter Restaurant Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Please enter the name of the restaurant'
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='cuisine'
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              placeholder='Type of cuisine'
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='Please enter restaurant location'
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='rating'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder='Please rate the experience out of 10'
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='service'
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder='How would you describe the service'
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Price per head'
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='comment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Comments about the experience'
            />
          </div>

          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={toreturn}
                  value={toreturn}
                  onChange={(e) => setToreturn(!toreturn)}
                />
                <span>Would you eat here again?</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect orange btn center'>
          Submit
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
 addLog : PropTypes.func.isRequired,
}

const modaleStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);
