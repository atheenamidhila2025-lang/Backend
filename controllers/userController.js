const users= require('../models/usermodel')

const createUser =(req,res) => {
     users.push(req.body);

     res.status(201).json({
          message: 'User Added',
          users 
     });
};

const getUsers = (req,res) => {
     res.status(200).json(users);
};

const updateUser = (req,res ) => {
    const id= Number(req,params.id);

    if (id < 0 || id >= users.length){
        return res.status(404).json({
             message: 'User Not Found'
        
    });
}

user[id] = req.body;

res.status(200).json({
     message: 'User Updated',
     users
});

};


const deleteUser= (req,res ) => {
    const id= Number(req.params.id);

    if (id < 0 || id >= users.length){
        return res.status(404).json({
             message: 'User Not Found'
        
    });
} 

users.splice(id, 1);

res.status(200).json({
     message: 'User Deleted',
     users
});

};
module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
};





