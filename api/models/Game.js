const { Model, DataTypes, ValidationError } = require("sequelize");

module.exports = (sequelize) =>
{
    class Games extends Model {};

    Games.init
    (
        {
            ID:
            {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },

            name:
            {
                type: DataTypes.STRING,
                unique: "name",
                allowNull: false,

                validate:
                {
                    isFirstLetterUpperCase(value)
                    {
                        if(value[0] < 'A' && value[0] > 'Z') throw new ValidationError("Name must start with an uppercase letter", { data: value });
                    }
                }
            },

            price:
            {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0.00,

                validate:
                {
                    isFloat:
                    {
                        args: true,
                        msg: "Price must be a floating point value",
                    }
                }
            }
        },

        {
            sequelize,
            modelName: "Games",
            freezeTableName: true,
            createdAt: "release_date",
            updatedAt: false,
        }
    );

    return Games;
}