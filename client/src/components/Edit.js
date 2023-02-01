import './Edit.css'
import { AiOutlineCheck } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine} from 'react-icons/ri';
import { BsCheckAll} from 'react-icons/bs';
import React, { useState } from 'react';

const ToDoItem = (props)=>{
    

    const [selected,setSelected]=useState(props.item.status)
    const [text, setText] = useState(props.item.content);

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const action= ()=>{
        props.setEdit(null)
    }

    return(
        <div className="TodoitemEdit">
            <div className='CheckBox'
                    onClick={
                        ()=>{
                            if(selected) setSelected(false)
                            else setSelected(true)
                        }
                    }>
                        {selected===true
                        ?<AiOutlineCheck color='black' size='30'/>
                        :<></>
                        }
            </div>
            <div className='textContainer'>
                <input type="text" className='input' value={text} onChange={handleChange} />
            </div>
            <div className='icons'>
                <FiEdit color='white' size='40' onClick={()=>action()}/>
            </div>
            
        </div>
    )
}
export default ToDoItem