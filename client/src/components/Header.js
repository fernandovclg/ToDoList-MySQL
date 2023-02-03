import './Header.css'
import axios, * as others from 'axios';


const Header = (props)=>{

    const New = ()=>{

        axios.get("http://localhost:3001/newTask").then(
        (response)=>{
            console.log("RESPONSE"+ response.data)
            props.setLista(response.data)
            const List = [...response.data]
            List.reverse()
            props.setEdit(List[0].idTasks)
            
        }
        )

    }
    return(
        <div className="HeaderContent">
            <div className='text' >
                ToDo List
            </div>
            <div className='button' onClick={()=>New()}>
                New
                {[1,2,3].lenght}
            </div>
        </div>
    )
}
export default Header