/**
 * Created by jae on 16-8-17.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
// import GoogleMap from 'google-map-react';
// import { changeMapCenter } from '../actions'
// import {withRouter} from 'react-router';
class Contact extends Component {
  /* static defaultProps = {
   center: {lat: 59.938043, lng: 30.337157},
   zoom: 9,
   greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
   };

   shouldComponentUpdate = shouldPureComponentUpdate;*/

  /*constructor(props) {
   super(props);
   }*/
  render() {
    return (

        <div className="contact-section">
          <div className="contact-head">
            <div className="container">
              <h3>全国配送区域说明及示图</h3>
              <h4>一、配送服务费</h4>
                <p> 现有配送城市：北京/ 天津/ 上海/ 杭州/ 苏州/ 无锡/ 广州/ 深圳
                单笔订单金额 100元以下，配送服务费12元；
                单笔订单金额≧ 100元，免收配送服务费。</p>

               <h4>二、配送范围</h4>
                <p> （一）北京：
                配送区域：六环以内；
                配送时间：五环内：9:30-22:00点；五环外-六环内：10:00-21:00；<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（二）天津：
                配送区域：快速路以内；快速路以外—绕城公路以内；
                配送时间：10:00-19:00；
                配送区域：天津滨海新区-塘沽：西至西中环快速-北至京津高速-东至海滨高速-南至海河，仅支持电话订购： 400 650 2121；
                配送时间：15:00~19:00；<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（三）上海：
                配送区域：A30以内（金山区除外）
                配送时间：
                A、A20外环以内：9:30-22:00；
                B、A20-A30之间：10:00-22:00；
                C、奉贤、泖港、叶榭、嘉定城区等在A30附近或较远区域：10:00-18:00；<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（四）杭州：
                配送区域：杭州绕城高速以内、西至杭州绕城高速-北至江东大道-东至钱塘江-南至钱塘江、杭州萧山国际机场、阿里巴巴西溪园区；
                配送时间：10:00-19:00<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（五）苏州：
                配送区域：
                A、苏州绕城高速内；
                B、阳澄湖区（西至常台高速-北至绕城北线-东至阳澄湖-南至京沪高速）、木渎区（西至绕城西线-北至太湖大道-东至金枫路-南至宝带西路）、吴中区（西至绕城西线-北至宝带西 路-东至友新快速路-南至绕城南线）；
                配送时间：10:00-19:00；<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（六）无锡：
                配送区域：
                A、西至西环路-北至沪宜高速/京沪高速/锡沪路-东至通锡高速-南至通锡高速及向西延长线（至太湖）；
                B、西至京沪高速-北至锡沪路-东至通锡高速-南至京沪/通锡高速；
                配送时间：10:00-19:00；<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（七）广州：
                配送区域：
                A、环城高速以内（S81）；
                B、环城高速以外，西至广清高速/广州环城高速/广珠西线高速-北至广州绕城高速-东至广州绕城高速-南至广州绕城高速；
                配送时间：9:30-20:00；<br/>
                <img src="../image/contact/1.png"/></p>
              <p>（八）深圳：
                配送区域：
                A、南山区、福田区、罗湖区；
                B、西至广深沿江高速-北至深圳宝安国际机场/沈海高速-东至长深高速/盐排高速-南至深盐路/沙盐路/沙深路/罗沙路/盐坝高速/滨河大道/京港澳高速/滨河大道/深圳湾以北；
                配送时间：10:00-19:00；<br/>
                <img src="../image/contact/1.png"/></p>
            </div>
          </div>


        </div>

    );
  }
}
/*const mapStateToProps = (state)=>  {return {
 mapPoints: state.mapPoints
 }};
 const mapDispatchToProps = (dispatch)=> {
 return{
 onMapCenterChanging: (center) => {
 dispatch(changeMapCenter(center))
 }
 }
 };*/

// var Contact = connect(mapStateToProps,mapDispatchToProps)(withRouter(Con));
export default Contact;