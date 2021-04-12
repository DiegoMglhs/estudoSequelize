module.exports = (sequelize, DataTypes) =>{
   
    // define (nomeMdolel, Colunas, Config)
     const Post = sequelize.define(
         "Post", {
             texto: DataTypes.STRING,
             img: DataTypes.STRING,
             usuarios_id: DataTypes.INTEGER,
             n_likes: DataTypes.INTEGER
 
         }, {
             tableName: "posts",
             timestamps: false
         }
     );

     Post.associate = (models) =>{
         //relaão de N...1 (varios posts de 1 usuario)
         Post.belongsTo(models.Usuario, {
             as: "usuario",
             foreignKey: "usuarios_id"
         });
         Post.hasMany(models.Comentario,{
             as: "comentarios",
             foreignKey: "posts_id"
         })
     }
 
     return Post;
 }


 