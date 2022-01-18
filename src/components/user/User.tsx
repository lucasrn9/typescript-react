import {useState} from 'react';
import {ChangeEvent,FC} from 'react';
interface IUser {
    name: string;
    description: string
}

const User:FC<IUser> = ({name,description}) => {
    
    const [writen,setWriten] = useState<string>()
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setWriten(e.target.value)
    }
    
    
    
    return (
        <div className="user">
            <h1> {name} </h1>
            <p>{description}</p>
            <input type="text" onChange={(e)=>handleChange(e)}/>
            <h2>{writen}</h2>
        </div>
    )
}

export default User