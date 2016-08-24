import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
    this.interval = setInterval(this.next.bind(this), 5000);
  }

  prev() {
    let index = (this.state.imageIndex - 1) < 0 ? 4 : this.state.imageIndex - 1;
    this.setState({
      imageIndex: index
    });


  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  next() {
    this.setState({
      imageIndex: (this.state.imageIndex + 1) % 5
    });
    
  }

  render() {
    let address = ['image/slideShow/slide.01.jpg', 'image/slideShow/slide.02.jpg', 'image/slideShow/slide.03.jpg', 'image/slideShow/slide.05.jpg', 'image/slideShow/slide.04.jpg'];
    return (

      <div className="aaaa">
        <img id="picture_0" src={address[this.state.imageIndex]}/>
        <button id="btn_1" className="glyphicon glyphicon-menu-left" onClick={this.prev.bind(this) }>.</button>
        <button id="btn_2" className="glyphicon glyphicon-menu-right" onClick={this.next.bind(this) }>.</button>
      </div>

    );
  }
}


export default SlideShow;
