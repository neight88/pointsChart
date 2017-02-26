import React from 'react';
import ReactDOM from 'react-dom';

const tally = {
    total: 0
};

const behaviors = [

]

function AddNewBehavior(props) {
    let newBehavior = {
        name: props.name,
        level: props.level,
        iterations: 0
    };
    return behaviors.push(newBehavior);
};

function AddPointsToTally(props) {
    return function() {
        tally.total += addend;
    }
};

function TotalPoints(tally) {
    return (
        <div>
            <header>
                Points Earned:
            </header>
            <div className="jumbotron">
            {tally.total}!
            </div>
        </div>
    )
};

function Button(props) {
        return <button className={props.className} onClick={props.click}>{props.text}</button>;
}

function TallyDiv() {
    return (
        <div>
            <header>
                Points Earned:
            </header>
            <div>
                {tally.total}
            </div>
        </div>
    );
}

function ButtonsDiv() {
    return (
        <div className="button-section">
            <Button className="btn btn-primary" text="Add Points!" click={AddPointsToTally(1)} />
            <Button className="btn btn-info" text="Claim Reward!" click="" />
            <Button className="btn btn-danger" text="Timeout" click="" />
        </div>

    );
}

function App() {
    return (
        <div>
            <TallyDiv />
            <ButtonsDiv />
        </div>
    )
}

const render = function(tally) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};
render(tally);






ReactDOM.render(<App />, document.getElementById('root'));
