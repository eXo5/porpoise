import React, {Component} from 'react'
import GalleryProduct from './GalleryProduct'
class Gallery2 extends Component {

  constructor(){
    super()
    this.state ={
      viewport: {
        top: 0,
        height: 0,
        items: [
  { title: 'Kitten 1', image: 'http://placekitten.com/311/313' },
  { title: 'Kitten 2', image: 'http://placekitten.com/302/302' },
  { title: 'Kitten 3', image: 'http://placekitten.com/303/303' },
  { title: 'Kitten 4', image: 'http://placekitten.com/304/304' },
  { title: 'Kitten 5', image: 'http://placekitten.com/305/305' },
  { title: 'Kitten 6', image: 'http://placekitten.com/306/306' },
  { title: 'Kitten 7', image: 'http://placekitten.com/307/307' },
  { title: 'Kitten 8', image: 'http://placekitten.com/308/308' },
  { title: 'Kitten 9', image: 'http://placekitten.com/310/310' },
  { title: 'Kitten 10', image: 'http://placekitten.com/311/311' }
]
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateViewport, false);
    window.addEventListener('resize', this.updateViewport, false);
    this.updateViewport();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateViewport);
    window.removeEventListener('resize', this.updateViewport);
  }

  updateViewport() {
    // TODO: debounce this call
    this.setState({
      viewport: {
        top: window.pageYOffset,
        height: window.innerHeight
      }
    });
  }

  render() {

    var self = this;

    var itemViews = this.state.items.map((item, i)=> {
      return <GalleryProduct title={item.title} image={item.image} viewport={self.state.viewport} />
    });

    return (
      <div>
        <h1>Items</h1>
        {itemViews}
      </div>
    );
  }




};
export default Gallery2