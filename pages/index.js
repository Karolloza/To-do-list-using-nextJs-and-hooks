import React from "react";
import { useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const ToDoList = styled.div`
    display:block;
    border: 1px solid #BBB;
    padding: 10px;
    width: 40%;
    ul {
    list-style-type:none;
        padding: 0px;
        li {
            word-break: break-word;
            padding:5px 15px;
            display:flex;
            justify-content: space-between;
            line-height:30px;
            border-radius:5px;
        }
        li:nth-of-type(2n) {
            background-color: #EEE;
        }
        li:nth-of-type(2n+1) {
            background-color: #DDD;
        }
    }
`;

const InputContainer = styled.div`
    display:flex;
    justify-content:center;
`

const ButtonAdd = styled.button`
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#89c403', endColorstr='#77a809',GradientType=0);
	background-color:#89c403;
	border-radius:6px;
	border:1px solid #74b807;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
	margin-left:10px;
	
	&:hover {
	background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#77a809', endColorstr='#89c403',GradientType=0);
	background-color:#77a809;
	}
`;
const ButtonRemove = styled.button`
	box-shadow:inset 0px 1px 0px 0px #f5978e;
	background:linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f24537', endColorstr='#c62d1f',GradientType=0);
	background-color:#f24537;
	border-radius:6px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding:3px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;
	margin-left:10px;
	height: 30px;
`;

const InputValue = styled.input`
  display: inline-block;
  box-sizing: content-box;
  padding: 6px 24px;
  font-size:15px;
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  text-overflow: clip;
  background: rgba(252,252,252,1);
  box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
`;


const Index = () => {
    const [listArray, setListArray] = useState([])
    const toDoInputValue = useRef()



    function handleAddNewTask() {
        if(listArray.includes(toDoInputValue.current.value)) {
            alert('Your Task already exists')
        } else if(toDoInputValue.current.value === '' ) {
            alert('You cannot add empty task')
        } else {
            setListArray([...listArray, toDoInputValue.current.value])
            toDoInputValue.current.value = ''
        }
    }

    function handleRemoveTask(e) {
        const filteredItems = listArray.filter(item => item !== e.target.previousElementSibling.innerText)
        setListArray([...filteredItems])
    }

    return (
        <Container>
            <ToDoList>
                <InputContainer>
                    <InputValue placeholder='add new task' ref={toDoInputValue} />
                    <ButtonAdd onClick={(e) => handleAddNewTask(e)}>Add</ButtonAdd>
                </InputContainer>
                <ul>
                    {listArray.map((el) => {
                        return (
                            <li key={el}>
                                <span>{el}</span>
                                <ButtonRemove onClick={(e) => handleRemoveTask(e)}>X</ButtonRemove>
                            </li>
                        )
                    })}
                </ul>
            </ToDoList>
        </Container>
    )
}

export default Index