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

    return Usuario;
}