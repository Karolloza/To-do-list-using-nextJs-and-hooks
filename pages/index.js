import { useState, useRef } from 'react'

const Index = () => {
    const [listArray, setListArray] = useState([])
    const toDoInputValue = useRef()

    function handleAddNewTask() {
        if(listArray.includes(toDoInputValue.current.value)) {
            console.log('Your Task already exists')
        } else if(toDoInputValue.current.value === '' ) {
            console.log('You cannot add empty task')
        } else {
            setListArray([...listArray, toDoInputValue.current.value])
        }
    }

    function handleRemoveTask(e) {
        const filteredItems = listArray.filter(item => item !== e.target.previousElementSibling.innerText)
        setListArray([...filteredItems])
    }

    return (
        <div className='container'>
            <div className='addButton'>
                <input type='input' placeholder='add new task' ref={toDoInputValue}/>
                <input type='button' value='Add' onClick={(e) => handleAddNewTask(e)}/>
            </div>
            <div className='toDoList'>
                <ul>
                    {listArray.map((el) => {
                        return (
                            <li key={el}>
                                <span>{el}</span>
                                <span className='removeBtn' onClick={(e) => handleRemoveTask(e)}>remove</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Index