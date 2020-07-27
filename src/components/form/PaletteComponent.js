import React from "react";

class PaletteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.labelName = this.props.labelName;
        this.value = this.props.value;
        this.palette = this.props.palette;  
        // this.flowerName= this.props.flowerName;
    }

    render() {
        return (
            <>
            <label htmlFor={this.props.labelName} className={this.props.labelName} >
              <input
                type="radio"
                id={this.props.labelName} 
                className="js-palette"
                name="palette"
                value={this.props.value}
                defaultChecked/>
              <div className={this.props.palette}>
                <span className="a"></span>
                <span className="b"></span>
                <span className="c"></span>
              </div>
            </label>
              </>
              
        );
    }
}



export default PaletteComponent;