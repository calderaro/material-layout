import React from "react";
import {AppBar} from "material-ui";

export default React.createClass({
  render(){
    return (
      <AppBar
        onLeftIconButtonTouchTap={this.props.tap}
        title="UPC Colletor" />
    );
  },
});
