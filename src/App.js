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
      nameInput: "",
      tagInput: "",
      displayedStudents: null,
    }
  }
  componentDidMount() {
    callAPI().then(data => {
      this.setState({
        students: data.students
      })
    })
  }
  filterName = (e) => {
    let result = filter(this.state.students, "name")(e.target.value)
    this.setState({
      displayedStudents: result,
      nameInput: e.target.value
    })
  }
  filterTag = (e) => {
    let tagResult = filter(this.state.students, "tag")(e.target.value)
    this.setState({
      displayedStudents: tagResult,
      tagInput: e.target.value
    })
  }
  renewStudents = (newStudents) => {
    this.setState({
      students: newStudents
    })
  }

  render() {
    let students = this.state.displayedStudents || this.state.students
    return (
      <div className="page">
        <div className="box">
          <div className="searchInputs">
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
                <Student student={stu} students={this.state.students} renewStudents={this.renewStudents} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
