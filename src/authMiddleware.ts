import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.secretKey;
if (!SECRET_KEY) {
  console.error("A SECRET_KEY não está definida no arquivo .env.");
  process.exit(1);
}




const users = [
    { username: 'usuario1', password: 'senha1', role: 'user' },
    // Adicione mais usuários conforme necessário
];

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (token == null) {
        return res.sendStatus(401); // Token não fornecido
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Token inválido ou expirado
        }
        (req as any).user = user; // Adiciona o usuário autenticado ao objeto de requisição para uso posterior
        next(); // Continua para a próxima middleware ou rota
    });
};