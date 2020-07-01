import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getApiList,
  getSearchResult,
  submitButtonAction,
  randomButtonAction,
} from '../store/actionCreators';
import { Form, Button } from 'react-bootstrap';
import { isEmpty } from 'lodash';

class controller extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getApiList } = this.props;
    getApiList();
  }

  handleSearch = (value) => {
    this.props.getSearchResult(value);
  };

  handleSubmitBtn = () => {
    this.props.submitButtonAction();
  };

  handleRandomBtn = () => {
    this.props.randomButtonAction();
  };

  render() {
    return (
      <>
        {isEmpty(this.props.selected) ? (
          <div className="display">
            <div>
              <Form>
                <Form.Group>
                  <label className="label">Astroid id</label>
                  <Form.Control
                    type="text"
                    onChange={(e) => this.handleSearch(e.target.value)}
                    placeholder="Enter Astroid Number"
                  />
                </Form.Group>
              </Form>
            </div>
            {this.props.errorText && <div>{this.props.errorText}</div>}
            <div>
              <span className="submitBtn">
                <Button
                  disabled={!this.props.searchText}
                  onClick={this.handleSubmitBtn}
                >
                  Submit
                </Button>
              </span>
              <span className="submitBtn">
                <Button onClick={this.handleRandomBtn}>Random</Button>
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="display-2">
              <div className="title">
                <div>{`Astroid Name : ${this.props.selected.name}`}</div>
                <div>
                  <span className="url">
                    {this.props.selected.nasa_jpl_url}
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.props.selected.nasa_jpl_url}
                    onClick={(e) => e.stopPropagation()}
                    title="Go To Url"
                  >
                    <Button className="url-btn">Go To Url</Button>
                  </a>
                </div>
                <div>
                  {this.props.selected.is_prtentially_hazardous_asteroid ? (
                    <div className="display-3">
                      <span className="spanRed">Hazardous</span>
                    </div>
                  ) : (
                    <div className="display-3">
                      <span className="spanGreen">Not Hazardous</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    astroidList: state.astroidList,
    searchText: state.searchText,
    selected: state.selected,
    errorText: state.errorText,
  };
};

const mapDispatchToProps = {
  getApiList,
  getSearchResult,
  submitButtonAction,
  randomButtonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(controller);
