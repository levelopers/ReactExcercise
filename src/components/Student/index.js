import React, { Component } from 'react'
import Expand from '../Expand'
import average from '../../modules/AverageGrades'
import './student.css'
import addTag from '../../modules/addTag';

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      tagInput: "",
    }
  }
  handleExpandClick = (e) => {
    this.setState(prevState => ({ isShow: !prevState.isShow }))
  }
  handleTagChange = (e) => {
    this.setState({
      tagInput: e.target.value
    })
  }
  submit = (id, event) => {
    if (event.key !== "Enter") return
    this.setState({
      tagInput: ""
    })
    this.props.renewStudents(addTag(this.props.students, id, this.state.tagInput))
  }

  render() {
    let stu = this.props.student
    return (
      <div className="student" key={stu['id']}>
        {/* pic error handling */}
        <div className="portrait">
          <img src={stu['pic']} alt="portrait" />
        </div>
        <div className="info">
          <div className="name">
            {stu['firstName'].toUpperCase()}&nbsp;{stu['lastName'].toUpperCase()}
          </div>
          <div className="general_info">
            <div>
              Email:&nbsp;{stu['email']}
            </div>
            <div>
              Company:&nbsp;{stu['company']}
            </div>
            <div>
              Skill:&nbsp;{stu['skill']}
            </div>
            <div>
              Average:&nbsp;{average(stu['grades'])}%
                      </div>
            <Expand
              content={stu}
              isShow={this.state.isShow}
              handleTagChange={this.handleTagChange}
              inputValue={this.state.tagInput}
              submit={this.submit}
            />
          </div>
        </div>
        <div className="expand_symbol" onClick={this.handleExpandClick}>
          {this.state.isShow
            ? <div className="minus">-</div>
            : <div className="plus" >+</div>
          }
        </div>
      </div>
    )
  }
}
