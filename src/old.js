import React from 'react';
import ReactDOM from 'react-dom';





const tally = {
    total: 0
};

const addPointsButton = (
    <button onClick={addPointsToTally(1)} className="btn btn-primary">Add a Point!</button>
);

class Button extends React.Component {
  render: function(children, color, clickFunction) {
    const { children, color, clickFunction } = this.props;
    return {
      type: 'button',
      props: {
        onClick: clickFunction,
        className: 'button button-' + color,
        children: {
          type: 'b',
          props: {
            children: children
          }
        }
      }
    };
  }
}


function addPointsToTally(addend) {
    return function() {
        tally.total += addend;
        render(tally);
    }
};

const render = function(tally) {
    let totalPoints = (
      <div>
        <header>
            Points Earned:
        </header>
        <div className="jumbotron">
        {tally.total}!
        </div>
        {addPointsButton}
      </div>
    );
    ReactDOM.render(
        totalPoints,
        document.getElementById('root')
    );
};
render(tally);
