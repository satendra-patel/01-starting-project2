import React, { useState } from 'react'

function MovieForm() {
    const[title,setTitle]= useState('');
    const[text,setText]=useState('');
    const[date,setDate]=useState('01/01/2023');

    const titleHandler=(event)=>{
        setTitle(event.target.value);
    }
    const textHandler=(event)=>{
        setText(event.target.value);
    }
    const dateHandler=(event)=>{
        setDate(event.target.value);
    }
    const formHandler=(event)=>{
        event.preventDefault();
        const MovieData={
            Title:title,
            Opening_Text:text,
            Release_Date:date
        }
        console.log(MovieData)
        setDate('');
        setText('');
        setTitle('');

    }


  return (
    <div>
        <form onSubmit={formHandler}>
            <label>Title</label>
            <br></br>
            <input type='text' onChange={titleHandler} value={title}></input>
            <br></br>
            <label>Opening Text</label>
            <br></br>
            <input type='text' value={text} onChange={textHandler}></input>
            <br></br>
            <label>Release Date</label>
            <input type='date' value={date} onChange={dateHandler}></input>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MovieForm