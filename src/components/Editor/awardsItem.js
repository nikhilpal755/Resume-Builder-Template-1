import TextArea from './TextArea'
import TextInput from './TextInput'
import React from 'react'

export default function AwardsItem({index, data, handleChange}) {
    return (
        <>
            <div className='pt-5' key={index}>
                <TextArea
                    placeholder='Description'
                    rows='2'
                    style='pb-2'
                    name='desc'
                    defaultValue={data.desc}
                    handleChange={(e) => handleChange(index, e)}
                />

                <TextInput
                    placeholder='Date'
                    name='date'
                    style='pb-2'
                    defaultValue={data.date}
                    handleChange={(e) => handleChange(index, e)}
                />
            </div>


        </>
    )
}
