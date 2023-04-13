import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'


function EventList(props) {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source='id'/>
      <TextField source='title'/>
      <TextField source='description'/>
      <DateField source='startDate'/>
      <DateField source='endDate'/>
      <TextField source='posterURL'/>
      <EditButton basepath="/event" />
      <DeleteButton basepath="/event" />
      </Datagrid>
    </List>
  )
}

export default EventList