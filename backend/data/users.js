import bcrypt from "bcryptjs"

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Deo',
        email:'john@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Jane Deo',
        email:'jane@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
]

export default users