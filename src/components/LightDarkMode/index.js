// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    containerMode: 'dark-container',
    headingMode: 'dark-heading',
    buttonMode: 'dark-button',
    buttonText: 'Light Mode',
  }

  changeMode = () => {
    const {containerMode, headingMode, buttonMode, buttonText} = this.state
    if (buttonText === 'Light Mode') {
      this.setState(prevState => ({
        containerMode: 'light-container',
        headingMode: 'light-heading',
        buttonMode: 'light-button',
        buttonText: 'Dark Mode',
      }))
    } else {
      this.setState(prevState => ({
        containerMode: 'dark-container',
        headingMode: 'dark-heading',
        buttonMode: 'dark-button',
        buttonText: 'Light Mode',
      }))
    }
  }

  render() {
    const {containerMode, headingMode, buttonMode, buttonText} = this.state
    return (
      <div className={containerMode}>
        <h1 className={headingMode}>Click To Change Mode</h1>
        <button type="button" className={buttonMode} onClick={this.changeMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
