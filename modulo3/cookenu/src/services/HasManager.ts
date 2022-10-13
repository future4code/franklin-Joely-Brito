import bcryptjs from 'bcryptjs'

export class hashManager {
    public hash = async (plaintext: string) => {
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS)
        const salt = await bcryptjs.genSalt(rounds)
        const hash = await bcryptjs.hash(plaintext, salt)

        return hash
    }

    public compare = async (plaintext: string, hash: string) => {
        return bcryptjs.compare(plaintext, hash)
    }
}