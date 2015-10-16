import React from 'react';
import {connect} from 'react-redux';
import Picker from '../components/Picker';
import Map from '../components/Map';
import {selectCenter} from '../actions';

const App = React.createClass({
  componentDidMount: function () {
    const {dispatch, selectedCenter} = this.props;
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.selectedCenter !== this.props.selectedCenter) {
      const {dispatch, selectedCenter} = nextProps;
    }
  },
  handleChange: function (selected) {
    this.props.dispatch(selectCenter(selected));
  },

  render: function () {
    const {selectedCenter, options, mapCenter} = this.props;
    return <div>
      <Picker value={selectedCenter}
        onChange={this.handleChange}
        options={options} />
      <Map center={mapCenter} />
    </div>;
  }
});

function mapStateToProps (state) {
  return {
    selectedCenter: state.selected,
    options: Object.keys(state.cities),
    mapCenter: state.cities[state.selected]
  };
}

export default connect(mapStateToProps)(App);
