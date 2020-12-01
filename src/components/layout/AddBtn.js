import React from "react";

export const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn orange darken-2 modal-trigger'>
        {" "}
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
