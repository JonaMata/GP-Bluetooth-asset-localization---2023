import bcrypt from 'bcrypt';

const ROUNDS: number = 10;

export function hashPassword (password: string): string {
    return bcrypt.hashSync(password, ROUNDS);
}

export function comparePassword (password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}
