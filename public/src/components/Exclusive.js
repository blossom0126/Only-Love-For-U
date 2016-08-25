/**
 * Created by jae on 16-8-20.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class Exclusive extends Component {
  render() {
    return (
        <div>
        <div className="text-center exclusive">
          <h3>见证真爱·分享幸福时光</h3>
          <h4>书写爱情甜蜜</h4>
          <p>.............................................</p>
          <p>ONLY FOR CAKES为每对恋人打造浪漫的专属空间。</p>
          <p>每对定制过蛋糕的恋人只要使用ONLY FOR CAKES帐号，</p>
          <p>即可进入甜蜜的情侣专属空间。</p>
          <p>在此写下您的真爱宣言，分享甜蜜的婚纱照、生活照，</p>
          <p>并收集来自四面八方好友的祝福见证。</p>
          <p>
            <img src="image/exclusive/kj1.jpg" style={{width:'500px',height:'300px'}}/>
          </p>
          <p>
            <div id="exclusive_01" className="exclusive_img_style">
              <img src="image/exclusive/02.jpg" className="exclusive_img_size gallery-left two"/>
            </div>
            <div id="exclusive_02" className="exclusive_img_style">
              <img src="image/exclusive/01.jpg" className="exclusive_img_size gallery-left two"/>
            </div>
            <div id="exclusive_04" className="exclusive_img_style">
              <img src="image/exclusive/04.jpg" className="exclusive_img_size gallery-left two"/>
            </div>
            <div id="exclusive_03" className="exclusive_img_style">
              <img src="image/exclusive/03.jpg" className="exclusive_img_size gallery-left two"/>
            </div>
          </p>
        </div>
</div>
    );
  }
}
export default Exclusive;