import React from 'react'; 

class ItemComponent extends React.Component {
    render () {
        return (
            <div className="item-components">
            <img src=""></img>
            <h4> {this.props.title}</h4>
            <p> </p>
            </div>
        )
    }
}

export default ItemComponent; 