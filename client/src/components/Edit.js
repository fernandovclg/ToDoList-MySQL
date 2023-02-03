import './Edit.css'
import { AiOutlineCheck } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import React, { useState } from 'react';
import axios, * as others from 'axios';

const ToDoItem = (props)=>{
    
    const item = {...props.item}
    const Lista = [...props.Lista]

    const [text, setText] = useState(props.item.content);

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const updateStatus= ()=>{
        axios.post("http://localhost:3001/update",{
            id: item.idTasks,
            content: props.item.content,
            status: item.status,
        }).then(
            (response)=>{console.log('RESPONSE : '+response)}
        )
        Lista[props.index].status=item.status
        props.setLista(Lista)
        
    }
    const updateAll = ()=>{
        item.content=text
        axios.post("http://localhost:3001/update",{
            id: item.idTasks,
            content: item.content,
            status: item.status,
            content: item.content
        }).then(
            (response)=>{console.log('RESPONSE : '+response)}
        )
        Lista[props.index]=item
        props.setLista(Lista)
        props.setEdit(null)
    }

    return(
        <div className="TodoitemEdit">
            <div className='CheckBox'
                    onClick={
                        ()=>{
                            if(!!item.status){
                                item.status=false
                                updateStatus()
                            }
                            else{
                                item.status=true
                                updateStatus()
                            }
                        }
                    }>
                        {item.status==true
                        ?<AiOutlineCheck color='black' size='30'/>
                        :<></>
                        }
            </div>
            <div className='textContainer'>
                <input type="text" className='input' value={text} onChange={handleChange} />
            </div>
            <div className='icons'>
                <FiEdit color='white' size='40' onClick={()=>updateAll()}/>
            </div>
            
        </div>
    )
}
export default ToDoItem