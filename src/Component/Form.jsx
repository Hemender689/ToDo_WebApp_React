import React from 'react'

function Form({ input, setInput, setTodos, todos ,setStatus}) {
    const inputTextHandler = (e) => {
        setInput(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
       if( !input ){
        alert("Please enter something in field🤣🤣🤣")
      }
      else
     {  setTodos([...todos,
        { text: input, complete: false, id: Math.random() }])
        setInput(""); }
    }

   const statusHandler=(e)=>{
       setStatus(e.target.value);

   }


    return (
        <div>
            <form>
                <div className='field'>
                    <input type='text' autoFocus
                        placeholder='Add here new Todo'
                        value={input}
                        onChange={inputTextHandler} />
                    <button className='btn'
                        onClick={clickHandler}
                        type='submit'>
                        Add
                    </button>
                
                <div className = "select">
                        <select onChange = {statusHandler} className="filter-todo">
                            <option value="All">All</option>
                            <option value="Complete">Complete</option>
                            <option value="Uncomplete">Uncomplete</option>

                        </select>
                    </div>
                    </div>
            </form>
            
        </div>
    )
}

export default Form
