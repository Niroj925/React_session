import React from 'react';
import useTitle from '../hook/useTitle';

const Aboutus = () => {
    useTitle('About us');
  return (
    <div>
        <center> <h3>About Us</h3>
        <p>This is  confess note post plateform where you can post your confession
            which will automatically removed after 24 hours.
        </p>
        </center>
        </div>
  )
}

export default Aboutus