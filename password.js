const bcrypt = require("bcrypt")

async function signup(userName, password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    console.log(hashPassword)
}

async function login(userPassword, dbPassword) {
    const validPassword = await bcrypt.compare(userPassword, dbPassword)
    console.log(validPassword)
}

signup("Venkat", "Jeru@26");
login("Jeru@26", "$2b$10$BUoOolatPgbDdzFlYBCyHev3UWsbtz2BY6V/ggBmEtslVPHnhj0gC");