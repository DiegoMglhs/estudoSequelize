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

// Post.findAll({
//     where:{
//         texto: {[Op.like]: 'oi%'} 
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     order: [
//         ['id', 'ASC']
//     ],
//     limit: 2, // limite de linhas postadas
//     offset: 2 //pula o nomero de linhas que foi definido
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// exercicios em sala separada

Usuario.findAll({
    where:{
        nome: {[Op.like]: '%a%'} 
    }
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Usuario.findAll({
    where:{
        nome: {[Op.notLike]: '%a%'} 
    }
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Comentario.findAll({
    order: [
        ['id', 'ASC']
    ],
    limit: 2, // limite de linhas postadas
    offset: 1
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});