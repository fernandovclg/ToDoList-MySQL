import './Header.css'
const Header = ()=>{
    return(
        <div className="HeaderContent">
            <div className='text'>
                ToDo List
            </div>
            <div className='button' onClick={()=>console.log('clicou New')}>
                New
            </div>
        </div>
    )
}
export default Header