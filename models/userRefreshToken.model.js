module.exports = (sequelize, Sequelize) => {
    const UserRefreshToken = sequelize.define("user_refresh_token", {
        refresh_token: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
    )
    return UserRefreshToken;
}
