/** INITIAL STATE **/
var initialState = {
  cities: {
    'London': {lat: 51.500152, lon: -0.126236},
    'Washington, DC': {lat: 38.895112, lon: -77.036366},
    'Beirut': {lat: 33.888629, lon: 35.495479}
  },
  selected: 'Washington, DC'
};

export function setInitialState () {
  return {
    type: 'SET_STATE',
    initialState
  };
}

export function selectCenter (selected) {
  return {
    type: 'SELECT_CENTER',
    selected
  };
}
