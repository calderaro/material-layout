import React from "react";

export default React.createClass({
  getInitialState(){
    return {
      hover: null,
    };
  },
  getStyle(){
    const {height, width, isopen} = this.props;
    return {
      container:{
        width: isopen && width < 768 ? "100vw" : 0,
        height: "100vh",
        position: "fixed",
        zIndex: 999,
        background: "rgba(0,0,0,0.2)",
      },
      leftNav: {
        width: isopen ? 256 : 0,
        height: "100vh",
        left: 0,
        background: "#FFF",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        overflowX: "hidden",
      },
      header: {
        color: '#fff',
        padding: "10px",
        backgroundColor: "black",
        backgroundSize: '100%',
        display: "flex",
        justifyContent: "center",
      },
      avatar: {
        width: "89%",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      },
      ul: {
        padding: 0,
        margin: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      li:{
        
      },
      a:{
        boxSizing: "border-box",
        display: "block",
        cursor: "pointer",
        lineHeight:" 48px",
        color: "rgba(0, 0, 0, 0.87)",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        width: "100%",
        background: "red",
        paddingLeft: "20px",
      }
    };
  },
  in(i){this.setState({hover: i })},
  out(){this.setState({hover: null })},
  click(e){e.stopPropagation()},
  render() {
    const {hover} = this.state;
    const {fullScreen} = this.props;
    const style = this.getStyle();
    const menuItems2 = [
      { r: "#/products", i: <li className="fa fa-list-alt">&nbsp;&nbsp;&nbsp;Products</li>} ,
      { r: "#/departments", i: <li className="fa fa-sitemap">&nbsp;&nbsp;&nbsp;Departments</li>} ,
      { r: "#/units", i: <li className="fa fa-balance-scale">&nbsp;&nbsp;&nbsp;Units</li>} ,
      { r: "#/logout", i: <li className="fa fa-sign-out">&nbsp;&nbsp;&nbsp;Logout</li>},
    ];
    return (
      <div style={style.container} onClick={this.props.toggle}>
        <div style={style.leftNav}  onClick={this.click}>
          <header style={style.header}>
            <img src="./static/img/logo.png" style={style.avatar}/>
          </header>
          <ul style={style.ul}>
            {menuItems2.map((item,i) => (
              <a 
                key={i} 
                style={{...style.a, background: i === hover ? "#F3F3F3" : null}}
                href={item.r}
                onMouseEnter={this.in.bind(this, i)}
                onMouseLeave={this.out} >
                  {item.i}
              </a>
            ))}
          </ul>
        </div>
      </div>
    )
  }
});
