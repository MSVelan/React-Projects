
import { Fab } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
const CreateArea = (props)=>{

    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title:"",
        content: ""
    })

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitNote = (event)=>{
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    const expand = ()=>{
        setIsExpanded(true);
    }
    return (
        <div>
            <form action="" className="create-note">
                {isExpanded && (
                    <input type="text" 
                        name="title" 
                        placeholder="Title" 
                        onChange={handleChange} 
                        value={note.title}
                    />
                )}
                
                <textarea 
                    name="content" 
                    id="" 
                    rows={isExpanded ? 3:1}
                    onClick={expand}
                    placeholder="Take a note..."
                    onChange={handleChange} 
                    value={note.content}
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    )
}

export default CreateArea;