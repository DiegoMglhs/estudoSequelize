const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op, useInflection} = require('sequelize');


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

// Usuario.findAll({
//     where:{
//         nome: {[Op.like]: '%a%'} 
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     where:{
//         nome: {[Op.notLike]: '%a%'} 
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }

//----------- exemplo create/destroy e update--------------

// Usuario.bulkCreate([{
//     nome: 'Diego',
//     email: 'diego@nextschool.com',
//     senha: 'diego123321'
// },{
//     nome: 'Anderson',
//     email: 'anderson@nextschool.com',
//     senha: 'anderson1'
// }]).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     senha: 'novasenha123'
// },{
//     where: {
//         id: 3
//     }
// }).then((resultado) =>{
//     console.log(resultado);
// });

// Usuario.findAll().then((usuarios) => {
//     console.log(usuarios.map((usuario) =>usuario.toJSON()));
// })

// Usuario.destroy({
//     where:{
//         id:5
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Post.create({
//     texto: 'Hello word! para nao dar azar.',
//     img: null ,
//     usuarios_id: '10',
//     n_likes: 1
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// },{ 
//     where: {
//         nome: {[Op.like]:
//             '%sergio%'}
//     }
// }).then((resultado) =>{
//     console.log(resultado);
// });

// Usuario.findByPk(1,{
//     include: [{
//         association:"posts"
//     }]
// }).then((usuario) =>{
//     console.table(usuario.posts.map((post) => post.toJSON()))
// });

                                   // outro metodo

// Usuario.findByPk(1,{include:['posts']}).then( //o nome dentro do include tem que ser igual ao alias feito no Usuario.js
//     usuario =>{
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

// Post.findByPk(2,{include:['comentarios']}).then( //o nome dentro do include tem que ser igual ao alias feito no Usuario.js
//     post =>{
//         console.log(post.toJSON());
//         sequelize.close();
//     }
// )

// Post.findByPk(3, {include:["curtiu"]}).then(
//     post => {
//         console.log(post.toJSON());
//         sequelize.close();
//     }
// )

Usuario.findByPk(1, {include:["curtiu"]}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)

