import React from "react";

export default React.createClass({
  getStyle(){
    return {
      div: {
        backgroundColor: "#00bcd4",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        boxSizing: "border-box",
        fontFamily: "Roboto, sans-serif",
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
        borderRadius: "0px",
        position: "relative",
        zIndex: 5,
        width: "100%",
        display: "WebkitBox",
        display: "WebkitFlex",
        display: "flex",
        minHeight: "64px",
        paddingLeft: "24px",
        paddingRight: "24px",
      },
      button: {
        border: "10px",
        background: "none",
        boxSizing: "border-box",
        display: "inline-block",
        font: "inherit",
        fontFamily: "Roboto, sans-serif",
        tapHighlightColor: "rgba(0, 0, 0, 0)",
        cursor: "pointer",
        textDecoration: "none",
        outline: "none",
        position: "relative",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        padding: "12px",
        width: "48px",
        height: "48px",
        fontSize: 0,
        marginTop: "8px",
        marginRight: "8px",
        marginLeft: "-16px",
        WebkitAppearance: "button"
      },
      span: {
        height:"100%",
        width:"100%",
        position:"absolute",
        top:0,
        left:0,
        overflow:"hidden"
      },
      svg: {
        display: "inline-block",
        height: "24px",
        width: "24px",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        fill: "#ffffff",
        color: "#ffffff",
        WebkitUserSelect: "none",
      },
      h1: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: "24px",
        fontWeight: 400,
        color: "#ffffff",
        lineHeight: "64px",
        boxFlex: 1,
        flex: 1,
      }
    }
  },
  render(){
    const style = this.getStyle();

    return (
      <div style={style.div}>
        <button style={style.button} tabIndex="0" type="button" onClick={this.props.tap} >
          <div>
            <span style={style.span} />
            <svg style={style.svg} viewBox="0 0 24 24" >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </div>
        </button>
        <h1 style={style.h1}>{this.props.title}</h1>
      </div>
    );
  },
});
