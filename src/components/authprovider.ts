import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
    // called when the user attempts to log in
    login:async ({ username,password }: { username: string ,password:string}) => {
        const data={"username":username,"password":password};
        var response=await fetch("https://ecell-backend-cb8y.onrender.com/api/auth/",{
            body:JSON.stringify(data),
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if(response.status==200){
            localStorage.setItem("username","s");
            return Promise.resolve();
        }else{
            return Promise.reject(new Error("Username or Password is incorrect")).then();
        }
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
