import React, { PropTypes } from 'react';
import Lane from './Lane.js';

const Lanes = ({ lanes }) => {
    return (
        <div className='lanes'>
            {lanes.map(lane => <Lane className='lane' key={lane.id} lane={lane} />)};
        </div>
    );
};

Lanes.PropTypes = {
    lanes: propTypes.array
};

export default Lanes;