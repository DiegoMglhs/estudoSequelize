const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op} = require('sequelize');


// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Comentario.findAll()
// .then((resultado) => {
//     // console.log(resultado)
//  console.log(resultado.map(user => user.toJSON()));
//  });

// Post.findOne({
//     where: {
//         usuarios_id: 1
//     }
// }).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Comentario.findByPk(2)
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });


//  Usuario.findByPk(4)
// .then((resultado) => {
//     console.log(resultado.dataValues);
// });

Post.findAll({
    where:{
        texto: {[Op.like]: 'oi%'} 
    }
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});
