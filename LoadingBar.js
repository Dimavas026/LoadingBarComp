import React from 'react'

export class LoadingBar extends React.Component {
    render() {
        return (
            <div className="loading-bar-container">
                <div className="loading-bar" style={this.props.styles}></div>
            </div>
        )
    }
}