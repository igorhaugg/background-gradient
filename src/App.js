import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

class App extends Component {
  state = {
    color1: '#fff',
    color2: '#fff',
    orientation: 'to right',
    copied: false
  };

  handleChangeComplete = color => {
    this.setState({ color1: color.hex, copied: false });
  };

  handleChangeComplete2 = color => {
    this.setState({ color2: color.hex, copied: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, copied: false });
  };

  render() {
    let backgroundStyle = {
      background: `linear-gradient(${this.state.orientation}, ${
        this.state.color1
      }, ${this.state.color2})`
    };
    let messageStyle;
    if (this.state.color1 === '#000000' || this.state.color2 === '#000000') {
      messageStyle = {
        color: 'white',
        borderColor: 'white'
      };
    }
    return (
      <main style={backgroundStyle} className="app full-centralize full-screen">
        <header className="header">
          <h1 className="header__title">Background Gradient</h1>
        </header>
        <div className="selectors">
          <div>
            <h2 className="selectors__title">Color 1</h2>
            <ChromePicker
              color={this.state.color1}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
          <div>
            <h2 className="selectors__title">Color 2</h2>
            <ChromePicker
              color={this.state.color2}
              onChangeComplete={this.handleChangeComplete2}
            />
          </div>
        </div>
        <div>
          <h2 className="result">Orientation</h2>
          <select
            name="orientation"
            className="select"
            value={this.state.orientation}
            onChange={this.handleChange}
          >
            <option value="to right">to right</option>
            <option value="to top right">to top right</option>
            <option value="to bottom right">to bottom right</option>
            <option value="to left">to left</option>
            <option value="to top left">to top left</option>
            <option value="to bottom left">to bottom left</option>
            <option value="to bottom">to bottom</option>
            <option value="to top">to top</option>
          </select>
        </div>

        <CopyToClipboard
          text={`background:${backgroundStyle.background}`}
          onCopy={() => this.setState({ copied: true })}
        >
          <div className="result">
            <span className="result__message" style={messageStyle}>
              background: {backgroundStyle.background}
            </span>
            <button className="button" style={messageStyle}>
              Copy
            </button>
            {this.state.copied && (
              <span className="copied-message" style={messageStyle}>
                Copied
              </span>
            )}
          </div>
        </CopyToClipboard>
      </main>
    );
  }
}

export default App;
