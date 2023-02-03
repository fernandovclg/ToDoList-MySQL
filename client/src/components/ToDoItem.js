import './ToDoItem.css'
import { AiOutlineCheck } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine} from 'react-icons/ri';
import { useState } from 'react';
import axios, * as others from 'axios';

const ToDoItem = (props)=>{

    const item = {...props.item}
    const Lista = [...props.Lista]

    const setLista=()=>{
        Lista[props.index] = item
        props.setLista(Lista)
    }

    const EditAction = ()=>{
        props.setEdit(props.item.idTasks)
    }

    const Delete = ()=>{
        axios.post("http://localhost:3001/delete",{
                                    id: item.idTasks,
                                }).then(
                                    (response)=>{console.log('RESPONSE : '+response)}
                                )
        Lista.splice(props.index, 1);
        props.setLista(Lista)
    }

    return(
        <div className="Todoitem">
            <div className='CheckBox'
                    onClick={
                        ()=>{
                            if(!!item.status){
                                item.status=false
                                setLista()
                                axios.post("http://localhost:3001/update",{
                                    id: props.item.idTasks,
                                    content: props.item.content,
                                    status: false,
                                }).then(
                                    (response)=>{console.log('RESPONSE : '+response)}
                                )
                            }
                            else{
                                item.status=true
                                setLista()
                                axios.post("http://localhost:3001/update",{
                                    id: props.item.idTasks,
                                    content: props.item.content,
                                    status: true,
                                }).then(
                                    (response)=>{console.log('RESPONSE : '+response)}
                                )
                            } 
                        }
                    }>
                        {item.status==true
                        ?<AiOutlineCheck color='black' size='30'/>
                        :<></>
                        }
            </div>
            <div className='textContainer'>
                {props.item.content}
            </div>
            <div className='icons'>
                <FiEdit color='#451531' size='30' onClick={()=>EditAction()}/>
                <RiDeleteBinLine color='#451531' size='30' onClick={()=>{Delete()}}/>
            </div>
            
        </div>
    )
}
export default ToDoItem