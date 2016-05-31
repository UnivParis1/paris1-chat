import React from 'react';

class DropDownStatus extends React.Component {
  constructor(){
    super();
  }
  handleClick(e) {
    let selectedStatus = e.target.className;
    if (selectedStatus.indexOf("online") > -1){
      selectedStatus = "online";
    }
    else if (selectedStatus.indexOf("busy") > -1) {
      selectedStatus = "busy";
    }
    else {
      selectedStatus = "invisible";
    }
    window.dispatchEvent(new CustomEvent('change_status', {detail: selectedStatus}));
  }
  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropDownStatus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropDownStatus">
          <li><a href="#" onClick={this.handleClick} className="online"><div className="status_icone dot_online"></div>Online</a></li>
          <li><a href="#" onClick={this.handleClick} className="busy"><div className="status_icone dot_busy"></div>Busy</a></li>
          <li><a href="#" onClick={this.handleClick} className="offline"><div className="status_icone dot_offline"></div>Invisible</a></li>
        </ul>
      </div>
    );
  }
}

export default DropDownStatus;