import { Label } from "@material-ui/icons";
import { useState } from "react";
import "./Form.css"

function Form(){
    const [name ,setName]=useState("")
    const [dateofbirth ,setDateofbirth]=useState("")
    const [governorate ,setGovernorate]=useState("")
    const [sex,setSex]=useState("")
    const [hobbies ,setHobbies]=useState([])
    function handleHobbies(e){
        if(!hobbies.includes(e.target.value)){
            setHobbies([...hobbies,e.target.value]);
        }else{
            setHobbies([...hobbies.filter((item)=>item!==e.target.value)]);
        }

        
    }
     function handlesubmit(e){
        alert(`${name} ${dateofbirth} ${governorate} ${sex} ${hobbies.join(',')}`)
     }

    return(
        <div className='question_form'>
        <br></br>
        <div className='section'>
            <div className='question_title_title'>
                <div className='question_form_top'>
                    
        <form onSubmit={(e)=>handlesubmit(e)}>
            <p>
                <label>name </label>
                <input type="text" name="name" className="question_from_top_desc" onChange={(e)=>setName(e.target.value)}/>
            </p>
            <p>
                <label>date of birth </label>
                <input type="date" name="date"  onChange={(e)=>setDateofbirth(e.target.value)}/>


            </p>
            <p>
                <label>governorate</label>
                <select name="governorate" className="selec" onChange={(e)=>setGovernorate(e.target.value)}>
                    <option value="bizerte">bizerte</option>
                    <option value="kelibia">kelibia</option>
                    <option value="nabeul">nabeul</option>
                    <option value="kasserine">kasserine</option>
                    <option value="zaghouan">zaghouan</option>
                </select>
            </p>
            <p>
                <Label>sex</Label>
                <input type="radio" name="sex" value="female" onChange={(e)=>setSex(e.target.value)}/>female
                <input type="radio" name="sex" value="male" onChange={(e)=>setSex(e.target.value)}/> male               


            </p>
            <p>
                <Label>hobbies</Label>
                <input type="checkbox" name="hobbies" value="sport" onChange={(e)=>handleHobbies(e)}/> sport
                <input type="checkbox" name="hobbies" value="reading" onChange={(e)=>handleHobbies(e)}/>reading
                <input type="checkbox" name="hobbies" value="music" onChange={(e)=>handleHobbies(e)}/>music
            </p>
            <p>
                <input type="submit" value="send" className="button"/>
            </p>
            
        </form>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Form