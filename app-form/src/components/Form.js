import React from 'react'
import FormHeader from './Formheader';

import Tabs from './Tabs';
import Question_form from './Question_form'


// import MainBody from './MainBody'

const Main = () => {
  return (
    <div>

    <FormHeader/>
    <Tabs/>
       <Question_form />
  
    </div>
  )
}

export default Main