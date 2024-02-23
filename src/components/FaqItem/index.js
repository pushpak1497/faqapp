import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  onClickPlus = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {isClicked} = this.state
    const {questionText, answerText} = faqDetails
    const imgUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <li>
        {isClicked ? (
          <>
            <div className="faq-item">
              <h1>{questionText}</h1>
              <button type="button" onClick={this.onClickPlus}>
                <img src={imgUrl} alt={altText} />
              </button>
            </div>
            <p>{answerText}</p>
          </>
        ) : (
          <div className="faq-item">
            <h1>{questionText}</h1>
            <button type="button" onClick={this.onClickPlus}>
              <img src={imgUrl} alt={altText} />
            </button>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
