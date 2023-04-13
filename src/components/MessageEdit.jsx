import React from 'react'
import {Edit, SimpleForm, TextInput, EmailField } from 'react-admin'

function EventEdit(props) {
  return (
    <Edit title='Edit a Message ' {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='name'/>
            <TextInput source='title'/>
            <TextInput multiline source='description'/>
            <EmailField source='email'/>
        </SimpleForm>
    </Edit>
  )
}

export default EventEdit