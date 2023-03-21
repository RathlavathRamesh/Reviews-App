// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  next = () => {
    this.setState(prev => {
      const num = prev.index

      if (num === 3) {
        return {index: num}
      }
      return {index: num + 1}
    })
  }

  prev = () => {
    this.setState(prev => {
      const num = prev.index

      if (num === 0) {
        return {index: 0}
      }
      return {index: prev.index - 1}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const item = reviewsList[index]
    return (
      <div className="ReviewContainer">
        <div className="middle">
          <h1 className="revheading">Reviews</h1>
          <img src={item.imgUrl} alt={item.username} className="profile" />
        </div>
        <div className="arrows">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.prev}
            className="but"
          >
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arr"
            />
          </button>
          <p className="namepara">{item.username}</p>
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.next}
            className="but"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arr"
            />
          </button>
        </div>
        <div className="middle">
          <p>{item.companyName}</p>
          <p className="discription">{item.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
