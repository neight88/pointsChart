import React from 'react';
import ReactDOM from 'react-dom';

const child = {
    name: "Peyton",
    score: 32
}

let childsNamePossessive = child.name + "'s"

const behaviors = [
    {name: "listening", level: 1, id: 1},
    {name: "going to bed on time", level:3, id: 2}
];

function Header(props) {
    return (
        <div className="jumbotron">
            <h1>{props.childsNamePossessive} Points Chart</h1>
        </div>
    );
};

Header.propTypes = {
    childsNamePossessive: React.PropTypes.string.isRequired,
};

const Scoreboard = React.createClass({
    propTypes: {
        score: React.PropTypes.number.isRequired,
    },


    render: function() {
        return (
            <div className="scoreboard">
                <div className="totalPoints">
                    <h1>Total Points:</h1>
                </div>
                <div className="counter">
                    <h1>{this.props.score}</h1>
                </div>
                <br/><br/>
            </div>
        );
    }
});

const Behavior = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        level: React.PropTypes.number.isRequired,
    },
    getInitialState: function() {
        return {
            score: 0,
        }
    },
    incrementScore: function() {
        this.setState({
            score: (this.state.score + 1),

        });
    },

    render: function() {
        return (
            <div className="col-xs-12 behavior">
                Behavior: {this.props.name},
                Level: {this.props.level},
                Iterations: {this.state.score}
                <button className="btn btn-success" onClick={this.incrementScore}>Add Iterations!</button>
                <br/>
            </div>
        );
    }
});

function Application(props) {
    return (
        <div className="col-xs-12 application">
            <Header childsNamePossessive={props.childsNamePossessive} />
            <Scoreboard score={32}/>
            <div className="behaviors-list">
            {props.behaviors.map(function(behavior) {
                return <Behavior name={behavior.name} level={behavior.level} key={behavior.id} />
            })}
            </div>
            <div className="row buttonsDiv">
                <br/>
                <button className="btn btn-info">Add new Category!</button>
                <br/>
                <button className="btn btn-primary">Redeem Points!</button>
            </div>
            <div>
            <br/><br/>
                <div className="row">
                    <div className="col-xs-6 infoDiv">
                        <h3>Info 1</h3>
                        <div className="graphic">
                            graphic goes here
                        </div>
                    </div>
                    <div className="col-xs-6 infoDiv">
                        <h3>Info 2</h3>
                        <div className="graphic">
                            graphic goes here
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <div className="col-xs-12 timeout">
                <button className="col-xs-12 btn btn-danger">Time Out</button>
            </div>
        </div>
    )
};

Application.propTypes = {
    childsNamePossessive: React.PropTypes.string,
    behaviors: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        level: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired,
};

Application.defaultProps = {
};

ReactDOM.render(<Application behaviors={behaviors} childsNamePossessive={childsNamePossessive}/>, document.getElementById("root"));
