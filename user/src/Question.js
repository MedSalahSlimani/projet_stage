
import React from 'react'
import "./Question.js"
import "./Question.css"
const Question = () => {
    function questionsUI(){
        return <h2>Question Boxes </h2>
    }
  return (
    <div>
      <div className='question_form'>
        <br></br>
        <div className='section'>
            <div className='question_title_title'>
                <div className='question_form_top'>
                    

                </div>
            </div>
            {questionsUI()}
        </div>
      </div>
      
        
      
    </div>
  )
}

export default Question
