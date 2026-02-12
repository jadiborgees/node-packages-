import readlineSync from 'readline-sync'
import bcrypt from 'bcrypt'

const senha = readlineSync.question('Digite sua senha: ', {
  hideEchoBack: true
})

const hash = await bcrypt.hash(senha, 10)

console.log('\nHash gerado:')
console.log(hash)