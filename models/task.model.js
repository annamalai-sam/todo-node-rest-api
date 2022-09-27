module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        due_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        finished: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });

    return Task;
};