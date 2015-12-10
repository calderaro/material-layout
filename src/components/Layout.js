import React from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import injectTapEventPlugin from "react-tap-event-plugin";

export default React.createClass({
  getInitialState(){
    return {
      isopen: true,
      mobile: false,
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  componentDidMount() {
    this.setState({isopen: window.innerWidth < 768 ? false : true});
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  handleResize(e) {
    this.setState({ 
      width: window.innerWidth,
      height: window.innerHeight }, this.check);
    
  },
  check(){
    //width hook for auto open a close
    if(window.innerWidth < 768 && !this.state.mobile ){ 
      this.setState({ isopen: false, mobile: true });
    }else if(window.innerWidth > 768 && this.state.mobile ){ 
      this.setState({ isopen: true, mobile: false });
    }
  },
  toggle(){
    console.log("toggle!")
    const {isopen, width} = this.state;
    this.setState({ isopen: !isopen });
  },
  getStyle(){
    const {isopen, width, mobile} = this.state;

    return {
      pageWrapper: {
        width: isopen && width > 768 ? width - 256 : width,
        float: "right",
        margin: 0,
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box",
        minHeight: "100%",
        padding: "0 !important",
        transition: "all 420ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        overflowX: "hidden",
      }
    };
  },
  render() {
    const {isopen, width} = this.state;
    const style = this.getStyle();

    return (
      <div>
        <LeftBar {...this.props} {...this.state} toggle={this.toggle}/>
        <div style={style.pageWrapper}>
          <TopBar {...this.props} tap={this.toggle}/>
          {this.props.children}
        </div>
      </div>
    );
  },
});
