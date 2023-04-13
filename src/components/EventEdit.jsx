import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

function UserEdit(props) {
  return (
    <Edit title='Edit a Event' {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='title'/>
            <TextInput multiline source='description'/>
            <DateInput label="start date" source='startDate'/>
            <DateInput label="end date" source='endDate'/>
            <TextInput source='posterURL'/>
        </SimpleForm>
    </Edit>
  )
}

export default UserEdit