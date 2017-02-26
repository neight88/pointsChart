//temp

import React from 'react';
import ReactDOM from 'react-dom';

const tally = {
    total: 0
};

function addPointsToTally(addend) {
    return function() {
        tally.total += addend;
        render(tally);
    }
};

/* function Comment(props) {
  return (
    <div className="UserInfo-name">
        {props.user.name}
    </div>
    <div className="timestamp">
        {props.user.timeSubmitted}
    </div>
  );
} */

function buttonsDiv(props) {
    return (
        <div className="button-section">
            <Button className="button button-points" text="Add Points!" click=""/>

            //addPointsToTally(props.addend) />
            <Button className="button button-categories" text="Claim Reward!" click="" />
            <Button className="button button-timeout" text="Timeout" click="" />
        </div>

    )
}

function Button(props) {
    return (
        <button className={props.className} onClick={props.click}>{props.text}</button>
    )
}

const render = function(tally) {
/*    let totalPoints = (
      <div>
        <header>
            Points Earned:
        </header>
        <div className="jumbotron">
        {tally.total}!
        </div>
        <buttonsDiv />
      </div>
  ); */
/* let totalPoints = (
      <buttonsDiv />
  )*/
    ReactDOM.render(
        buttonsDiv,
        document.getElementById('root')
    );
};
render(tally);
