import bycrypt from "bcrypt"

const password = "1234"
const hash = await bycrypt.hash(password, 10)

console.log("hash: ", hash);

console.log("confere 0000:", await bycrypt.compare ("0000", hash));
