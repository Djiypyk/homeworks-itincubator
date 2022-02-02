import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        if ((/[1-9]/g).test(e.currentTarget.value) ) {
            return setError('Name must contain only letters.')
        } else if (e.currentTarget.value.length <= 1) {
            return setError('Name is short. Please enter a valid name.')
        } else {
            return setError('')
        }

    }
    const addUser = () => {
        if (name.length > 1) {
            alert(`Hello  ${name}!`)
            addUserCallback(name)
            setName('')
        } else {
            alert('Write your name')
        }


    }
    const onKeyDownAddName = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }
    const totalUsers = users.length


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownAddName={onKeyDownAddName}
        />
    )
}

export default GreetingContainer
