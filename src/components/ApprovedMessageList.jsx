import React from 'react'
import {List, Datagrid, TextField,EmailField} from 'react-admin'


function ApprovedList(props) {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source='id'/>
      <TextField source='name'/>
      <EmailField source='email'/>
      <TextField source='title'/>
      <TextField source='description'/>
      </Datagrid>
    </List>
  )
}

export default ApprovedList