import React, { Component } from 'react';
import './App.css';
import callAPI from './modules/FetchAPI'
import SearchInput from './components/searchInput'
import filter from './modules/filter'
import Student from './components/Student'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: null,
      displayedStudents: null,
      nameInput: "",
      tagInput: "",
    }
  }
  componentDidMount() {
    //fetch api
    callAPI().then(data => {
      this.setState({
        students: data.students,
        displayedStudents: data.students
      })
    })
  }
  filterName = (e) => {
    let currentResult
    if (this.state.tagInput) {
      currentResult = filter(this.state.students, "tag")(this.state.tagInput)
    } else {
      currentResult = this.state.students
    }
    this.setState({
      displayedStudents: filter(currentResult, "name")(e.target.value),
      nameInput: e.target.value
    })
  }
  filterTag = (e) => {
    let currentResult
    if (this.state.nameInput) {
      currentResult = filter(this.state.students, "name")(this.state.nameInput)
    } else {
      currentResult = this.state.students
    }
    this.setState({
      displayedStudents: filter(currentResult, "tag")(e.target.value),
      tagInput: e.target.value
    })
  }
  //add tag property 
  renewStudents = (newStudents) => {
    this.setState({
      students: newStudents
    })
  }
  render() {
    let students = this.state.displayedStudents
    return (
      <div className="page">
        <div className="box">
          <div className="searchInputs" >
            <SearchInput
              change={this.filterName}
              value={this.state.nameInput}
              placeholder="Search by name"
            />
            <SearchInput
              change={this.filterTag}
              value={this.state.tagInput}
              placeholder="Search by tags"
            />
          </div>
          <div className="students">
            {students &&
              students.map(stu =>
                <Student
                  student={stu}
                  students={students}
                  renewStudents={this.renewStudents}
                  key={stu["id"]}
                />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
