/**
 * Created by hanyile on 16/8/17.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class BrandStory extends Component {
  render() {
    return (
        <div>
          <div className="about-section">
            <div className="container">
              <h2>About Only Cake</h2>
              <div className="about-section">
                <div className="col-md-7 ab-text">
                  <h4>Welcome To <span>Only Cake</span></h4>
                  <p>西安Only Cake公司专注于欧式、法式甜点、配方蛋糕的传承与创新。拥有资深法厨团队、国际航空配餐业（IFCA）食品生产管理团队，自有专业物流配送队伍。
                    Only Cake采用近100%进口原料、食材；坚持苛刻挑剔的选择，
                    甄选世界同类顶级食材；努力为客户创造、提供高品质、绿色、健康、安全的美味配方食品！
                    且坚持实施客户点对点、送货上府的快捷服务。</p>
                  <div className="why">
                    <h4>Thanks  Choose Us</h4>
                    <p>无木不成林，任何事业的成就均离不开诸多的“您”（同事、客户）<br/>

                      还记得曾经的我们<br/>

                      怀揣着对食材的高挑剔、配方的传承及永为消费者提供高品质安全、美味食品的公司愿景<br/>

                      开始了Only Cake的发展之旅<br/>

                      Only Cake拒绝付费广告、坚信体验与口碑相传<br/>

                      Only Cake坚持合理利润，坚持给予“您”最高性价比、关怀与便捷</p>
                  </div>
                </div>
                <div className="col-md-5 chef">
                  <img src="../image/brandstory/brand.jpg" className="img-responsive" alt=""/>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="team-section" style={{background:'#E6FAF9'}}>
              <div className="container">
                <div className="team">
                  <div className="col-md-4 team-left">
                    <h3>OUR TEAM</h3>
                  </div>
                  <div className="col-md-8 team-right">
                    <ul className="ch-grid">
                      <li>
                        <div className="ch-item ch-img-1" style={{background:'url(../image/cook/images.jpg)'}}>
                          <div className="ch-info">
                            <h3>Kim Jae Joong</h3>
                            <p>only cake<a href="#"></a>only cake</p>
                          </div>
                        </div>
                        <h4>Kim Jae Joong</h4>
                        <p>JYJ&&&CONAN</p>
                        <a className="more" href="#">More Info </a>
                      </li>
                      <li>
                        <div className="ch-item ch-img-2" style={{background:'url(../image/cook/images02.jpg)'}}>
                          <div className="ch-info">
                            <h3>Kim Jae Joong</h3>
                            <p>only cake<a href="#"></a>only cake</p>
                          </div>
                        </div>
                        <h4>Kim Jae Joong</h4>
                        <p>JYJ&&&CONAN</p>
                        <a className="more" href="#">More Info </a>
                      </li>
                      <li>
                        <div className="ch-item ch-img-3" style={{background:'url(../image/cook/images.jpg)'}}>
                          <div className="ch-info">
                            <h3>Kim Jae Joong</h3>
                            <p>only cake<a href="#"></a>only cake</p>
                          </div>
                        </div>
                        <h4>Kim Jae Joong</h4>
                        <p>JYJ&&&CONAN</p>
                        <a className="more" href="#">More Info </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default BrandStory;

