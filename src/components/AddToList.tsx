import React, { useState } from 'react';
import { IProps } from '../interfaces/User';

interface MyProps {
    people: IProps['people'],
    setPeople: React.Dispatch<React.SetStateAction<IProps['people']>>
}

const AddToList: React.FC<MyProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        });
    }

    return (
        <div className='AddToList'>
            <input
                type='text'
                placeholder='Name'
                className='AddToList-input'
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            <input
                type='number'
                placeholder='Age'
                className='AddToList-input'
                name="age"
                value={input.age}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Image URL'
                className='AddToList-input'
                name="url"
                value={input.url}
                onChange={handleChange}
            />
            <textarea
                placeholder='Note'
                className='AddToList-input'
                name="note"
                value={input.note}
                onChange={handleChange}
            />
            <button
                className='AddToList-btn'
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    );
}

export default AddToList;