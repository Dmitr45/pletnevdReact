import {Request, Response, NextFunction } from "express";

export const authMiddleware = async (req:Request, res:Response, next: NextFunction) => { 
    // функция next() позволит нам пройти по процессу дальше
    const authHeader = req.headers.authorization; 
    if (!authHeader) { // Если в headers запроса ПУСТО в графе authorization
        res.status(401).json({message : 'Unauthorized'}) // Выкидываем ошибку
    }
    next(); // Иначе продолжаем
};