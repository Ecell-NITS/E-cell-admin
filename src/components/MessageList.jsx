import React, { useCallback } from 'react';
import { List, Datagrid, TextField, EmailField, DeleteButton } from 'react-admin';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/IconButton';

function UserList(props) {
  const handleApproveClick = useCallback(async(id,name,email,title,description) => {
    const data={"id":id,"name":name,"email":email,"title":title,"description":description};
    var response=await fetch(`https://ecell-backend-cb8y.onrender.com/api/message/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
      },
    })
    fetch('https://ecell-backend-cb8y.onrender.com/api/approvedmessages/',{
      method:"POST",
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
      },
    }).then((response)=>{
      window.location.reload(false);
    });
  }, []);

  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id'/>
        <TextField source='name'/>
        <EmailField source='email'/>
        <TextField source='title'/>
        <TextField source='description'/>
        <Button
          aria-label="DoneIcon"
          color="success"
          sx={{ fontSize: 'small', gap: '0.5rem' }}
          onClick={(event) => {
            event.preventDefault();
            const id = event.currentTarget.closest('tr').childNodes[1].childNodes[0].childNodes[0].data;
            const name=event.currentTarget.closest('tr').childNodes[2].childNodes[0].childNodes[0].data;
            const email=event.currentTarget.closest('tr').childNodes[3].childNodes[0].childNodes[0].data;
            const title=event.currentTarget.closest('tr').childNodes[4].childNodes[0].childNodes[0].data;
            const description=event.currentTarget.closest('tr').childNodes[5].childNodes[0].childNodes[0].data;
            handleApproveClick(id,name,email,title,description);
          }}
        >
          <DoneIcon />Approve
        </Button>
        <DeleteButton basepath="/message" />
      </Datagrid>
    </List>
  )
}

export default UserList