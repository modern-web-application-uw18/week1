import React,{Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}

class ImageList extends Component {

    clickHandler(src) {
      return () => alert(src);
    }

    onMouseEnter() {
      console.log('hello world');
    }

    render() {
      const images = this.props.images.map((src, key) => {
        return <img key={key} src={src} alt={`${key}`} onClick={this.clickHandler(src)} onMouseEnter={this.onMouseEnter}/>
      });
      return images;
    }
}

ImageList.propTypes= propTypes;

export default ImageList;
