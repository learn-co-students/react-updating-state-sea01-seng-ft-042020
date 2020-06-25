// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component {

    constructor() {
        super();

        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
            hasBeenClicked: !previousState.hasBeenClicked
            }
        })
        console.log(this.state.hasBeenClicked);
    }

    render() {
        return (
            <div>
                {/* <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p> */}
                <button onClick={this.handleClick}>{this.state.hasBeenClicked === true ? "I have been clicked" : "I have not been clicked"}</button>
            </div>
        )
    }



}


export default ClickityClick;