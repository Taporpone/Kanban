import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createLane } from '../Lane/LaneActions';
import Lanes from '../Lane/Lanes';

// Import Style
import styles from './Kanban.css';

class Kanban extends Component {
  render() {
    const { lanes, createLane } = this.props;
    return (
      <div>
        <button className={styles.AddLane}>Add Lane</button>
        <Lanes lanes={lanes} />
        <button className="add-lane"
          onClick={() => createLane({
            name: 'New lane'
          })}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  lanes: Object.values(state.lanes)
};

const mapDispatchToProps = {
  createLane
}

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
