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
              <h2>About Us</h2>
              <div className="about-section">
                <div className="col-md-7 ab-text">
                  <h4>Welcome to <span>FoodHouse</span></h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960</p>
                  <div className="why">
                    <h4>Why Choose Us</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled.</p>
                  </div>
                  <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing.</li>
                    <li>Lorem Ipsum is simply dummy.</li>
                    <li>Lorem Ipsum is simply dummy text.</li>
                  </ul>
                </div>
                <div className="col-md-5 chef">
                  <img src="../image/chef.png" className="img-responsive" alt="" />
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          <div className="team-section">
            <div className="container">
              <div className="team">
                <div className="col-md-4 team-left">
                  <h3>OUR TEAM</h3>
                </div>
                <div className="col-md-8 team-right">
                  <ul className="ch-grid">
                    <li>
                      <div className="ch-item ch-img-1">
                        <div className="ch-info">
                          <h3>Brainiac</h3>
                          <p>by Daniel Nyari <a href="#">View on Dribbble</a></p>
                        </div>
                      </div>
                      <h4>MICHAEL FREEMAN</h4>
                      <p>Nulla facilisi. Aean nec eros.…</p>
                      <a className="more" href="#">More Info </a>
                    </li>
                    <li>
                      <div className="ch-item ch-img-2">
                        <div className="ch-info">
                          <h3>Vision</h3>
                          <p>by Daniel Nyari <a href="#">View on Dribbble</a></p>
                        </div>
                      </div>
                      <h4>ADRIANA SPELLING</h4>
                      <p>Nulla facilisi. Aenn nec eros.…</p>
                      <a className="more" href="#">More Info </a>
                    </li>
                    <li>
                      <div className="ch-item ch-img-3">
                        <div className="ch-info">
                          <h3>Cylon</h3>
                          <p>by Daniel Nyari <a href="#">View on Dribbble</a></p>
                        </div>
                      </div>
                      <h4>ADRIANA SPELLING</h4>
                      <p>Nulla facilisi. Aenn nec eros.…</p>
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

