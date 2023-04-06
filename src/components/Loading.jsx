import React from 'react'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css";

const Loading = () => {
  return (
    <div className='loading__padre'>
        <div className='loading__hijo'>
        <Spinner color='warning' />
        </div>
    </div>
)}

export default Loading