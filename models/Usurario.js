module.exports = (sequelize, DataTypes) =>{
   
   // define (nomeMdolel, Colunas, Config)
    const Usuario = sequelize.define(
        "Usuario", {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING

        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    Usuario.associate = (models) =>{
        //relacão 1..N um usuário tem varios posts
        Usuario.hasMany(models.Post,{
            as:"posts", 
            foreignKey:"usuarios_id"});
    }

    return Usuario;
}