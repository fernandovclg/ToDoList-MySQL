import './ToDoItem.css'
import { AiOutlineCheck } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine} from 'react-icons/ri';
import { useState } from 'react';
const ToDoItem = (props)=>{

    const [selected,setSelected]=useState(props.item.status)

    const EditAction = ()=>{
        props.setEdit(props.item.idTasks)
    }

    return(
        <div className="Todoitem">
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
                {props.item.content}
            </div>
            <div className='icons'>
                <FiEdit color='#451531' size='30' onClick={()=>EditAction()}/>
                <RiDeleteBinLine color='#451531' size='30' onClick={()=>console.log('clicou')}/>
            </div>
            
        </div>
    )
}
export default ToDoItem