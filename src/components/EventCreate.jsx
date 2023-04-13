import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'

function EventCreate(props) {
  return (
    <Create title='Create a Event' {...props}>
        <SimpleForm>
            <TextInput source='title'/>
            <TextInput multiline source='description'/>
            <DateInput label="start date" source='startDate'/>
            <DateInput label="end date" source='endDate'/>
            <TextInput source='posterURL'/>
        </SimpleForm>
    </Create>
  )
}

export default EventCreate