/* global mapboxgl */
import React from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWN1dCIsImEiOiJMVzF2NThZIn0.WO0ArcIIzYVioen3HpfugQ';
export default React.createClass({
  componentDidMount: function () {
    var mapCenter = this.props.center;
    this.map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [mapCenter.lon, mapCenter.lat],
      zoom: 9
    });
  },
  componentWillReceiveProps: function (nextProps) {
    var mapCenter = nextProps.center;
    this.map.flyTo({center: [mapCenter.lon, mapCenter.lat], zoom: 9});
  },
  render: function () {
    return <div ref='map' id='map'></div>;
  }
});
