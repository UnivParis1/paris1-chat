import React from 'react';
import UserStatus from './UserStatus.jsx';

class DropDownStatus extends React.Component {
  constructor(){
    super();
    this.handleClickStatus = this.handleClickStatus.bind(this);
    this.handleClickDisconnect = this.handleClickDisconnect.bind(this);
  }
  stopPropagation(e){
    e.stopPropagation();
  }
  handleClickStatus(e) {
    this.stopPropagation(e);
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
  handleClickDisconnect(e){
    this.stopPropagation(e);
    window.dispatchEvent(new Event('disconnect'));
  }
  render() {
    return (
      <div onClick={this.stopPropagation} className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropDownStatus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <UserStatus status="online"/>En ligne <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropDownStatus">
          <li><a href="#" onClick={this.handleClickStatus} className="online"><div className="status_icone dot_online"></div>En ligne</a></li>
          <li><a href="#" onClick={this.handleClickStatus} className="busy"><div className="status_icone dot_busy"></div>Occupé</a></li>
          <li><a href="#" onClick={this.handleClickStatus} className="offline"><div className="status_icone dot_offline"></div>Invisible</a></li>
        </ul>
      </div>
    );
  }
}

export default DropDownStatus;
