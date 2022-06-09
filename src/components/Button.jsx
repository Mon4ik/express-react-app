import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const style = { padding: "0.4rem", "boxShadow": "none", "border": "none", "borderRadius": "3px", "backgroundColor": "#ddd" }
        return (
            <button style={style}>{this.props.children}</button>
        )
    }
}