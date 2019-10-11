import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-awesome-modal';


class Dialog extends Component {
  constructor(props) {
    super();
    this.state = {
        visible : false
    }
  }
  openModal() {
    this.setState({
        visible : true
    });
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }

    render() {
        return (
            <div>
                <input type="button" value="Fighter info" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Title</h1>
                        <div className="fighter-info">
                          <div className="values">
                            <div>
                              <span>dfsdfds</span>
                              <span>dfsdfds</span>
                            </div>
                            <div>
                              <span>dfsdfds</span>
                              <span>dfsdfds</span>
                            </div>
                            <div>
                              <span>dfsdfds</span>
                              <span>dfsdfds</span>
                            </div>
                          </div>
                          <div className="values">
                            <div>
                              <span>dfsdfds</span>
                              <span>dfsdfds</span>
                            </div>
                            <div>
                              <span>dfsdfds</span>
                              <span>dfsdfds</span>
                            </div>
                            <div>
                              <span>dfsdfds</span>
                              <span>dfsdfds</span>
                            </div>
                          </div>
                        </div>
                        <button  onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => ({
  fighter: state.dialog
});


export default connect(mapStateToProps, null)(Dialog)