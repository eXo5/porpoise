import React, {Component} from 'react'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
import LazyLoad from 'react-lazy-load'
import {Carousel} from 'react-materialize'

import pic from '../images/IMG_1369.JPG'
import pic1 from '../images/IMG_1370.JPG'
import pic2 from '../images/IMG_1371.JPG'
import pic3 from '../images/IMG_1372.JPG'
import pic4 from '../images/IMG_1373.JPG'
import pic5 from '../images/IMG_1374.JPG'
import pic6 from '../images/IMG_1375.JPG'
import pic7 from '../images/IMG_1377.JPG'
import pic8 from '../images/IMG_1378.JPG'
import pic9 from '../images/IMG_1380.JPG'
import pic10 from '../images/IMG_1381.JPG'
import pic11 from '../images/IMG_1382.JPG'
import pic12 from '../images/IMG_1383.JPG'
import pic13 from '../images/IMG_1384.JPG'
import pic14 from '../images/IMG_1385.JPG'
import pic15 from '../images/IMG_1386.JPG'
import pic16 from '../images/IMG_1387.JPG'
import pic17 from '../images/IMG_1389.JPG'
import pic18 from '../images/IMG_1390.JPG'
import pic19 from '../images/IMG_1391.JPG'
import pic20 from '../images/IMG_1392.JPG'
import pic21 from '../images/IMG_1393.JPG'
import pic22 from '../images/IMG_1394.JPG'
import pic23 from '../images/IMG_1395.JPG'
import pic24 from '../images/IMG_1397.JPG'
import pic25 from '../images/IMG_1398.JPG'
import pic26 from '../images/IMG_1399.JPG'
import pic27 from '../images/IMG_1400.JPG'

//import Gallery2 from './Gallery2'
class Gallery extends Component {
	constructor(){
		super()
		this.state = {
			picCount: 1369,
			next: "",
			thisPic: "",
			lastPic: "",
			myFiles: []
		}
	}

componentDidMount(){
	// helper.checkPics(testFolder)
	// .then((data)=>{
	// 	console.log(data)
	// })
	// var myfiles = [];
	// helper.getPics().then((results)=>{
	// 	console.log(results)
	// 	})
	//this.setState({myFiles: myfiles})
		}
	




render() {

	return (
		<div>

			<Navi />

<div>
<Carousel options={{fullwidth: true}}>
<div className="filler" />
		<LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic1} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic2} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic3} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic4} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic5} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic6} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic7} />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={500}>
      <img className="thatPics" src={pic8} />
    </LazyLoad>
    <div className="filler" />
        <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic9} />
    </LazyLoad>
    <div className="filler" />
        <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic10} />
    </LazyLoad>
    <div className="filler" />
        <LazyLoad height={762} offsetVertical={500}>
      <img className="thesePics" src={pic8} />
    </LazyLoad>
    <div className="filler" />
   </Carousel> 
	{/*	<img className="thesePics" src={pic} />*/}
		</div>
	</div>	
		)
	}
}

export default Gallery