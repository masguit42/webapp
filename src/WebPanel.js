import React, { Component } from 'react';
import './WebPanel.css';
import Dropdown from './Dropdown';

class WebPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleSelect = (option) => {
    this.setState({ selectedOption: option });
  };

  render() {
    const { selectedOption } = this.state;
    const { name, options, themeParams} = this.props;

    return (
      <div className="web-panel">
        <div className="left-panel">
          <h1>{name}</h1>
        </div>
        <div className="right-panel">
          <Dropdown
            options={options}
            onSelect={this.handleSelect}
            placeholder="Select an option"
            themeParams={themeParams}
          />
        </div>
      </div>
    );
  }
}

export default WebPanel;
