import React, {Component} from 'react';

class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
    setInterval(this.next.bind(this), 5000);
  }

  prev() {
    let index = (this.state.imageIndex - 1) < 0 ? 4 : this.state.imageIndex - 1;
    this.setState({
      imageIndex: index
    })
  }

  next() {
    console.log(this);
    this.setState({
      imageIndex: (this.state.imageIndex + 1) % 5
    })
  }

  render() {
    let address = ['image/slideShow/slide.01.jpg', 'image/slideShow/slide.02.jpg', 'image/slideShow/slide.03.jpg','image/slideShow/slide.04.jpg','image/slideShow/slide.05.jpg'];

    return (
    <div className="header">
      <div className="header-top">
        <div className="container">
          <div className="top-nav">
            <span className="menu two"> </span>
            <ul>
              <li><a href="">首&nbsp;&nbsp;页</a></li>
              <li><a className="active" href="http://127.0.0.1:3000/cakelist">蛋糕名录</a></li>

              <li><a href="http://127.0.0.1:3000/brandstory">品牌故事</a></li>
              <li><a href="http://127.0.0.1:3000/login">个人中心</a></li>
              <li><a href="http://127.0.0.1:3000/signup">注册</a></li>
              <li className="lost"><a href="http://127.0.0.1:3000/contact">联系我们</a></li>

              <div className="clearfix"> </div>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="head-bg">
        <div className="logo three">
          <a href=""><h1>ONLY <span>FOR </span>CAKES</h1></a>
        </div>
      </div>
    
        <div>
          <img id="picture_0" src={address[this.state.imageIndex]}/>
          <button id="btn_1" className="glyphicon glyphicon-menu-left" onClick={this.prev.bind(this)}>.</button>
          <button id="btn_2" className="glyphicon glyphicon-menu-right" onClick={this.next.bind(this)}>.</button>
        </div>
      </div>
    );
  }
}


export default SlideShow;
