
import React from 'react'
import './expand.css'

export default function Expand({ content, isShow, handleTagChange, inputValue, submit }) {
  return (
    <div className="expand_outbox">
      {isShow &&
        <div className="expand">
          {content["grades"].map((grade, index) =>
            <div key={index}>
              Test {index}:  {grade.concat("%")}
            </div>
          )}
          <div className="expand_tags">
            {content["tags"] && content["tags"].map((tag, index) =>
              <div key={index} className="tag">
                {tag}
              </div>
            )}
          </div>
          <div className="expand_inputs">
            <input
              className="expand_input"
              type="text"
              onChange={handleTagChange}
              value={inputValue}
              onKeyPress={e => submit(content["id"], e)}
              placeholder="Add a tag"
            />
          </div>
        </div>
      }
    </div>
  )
}
