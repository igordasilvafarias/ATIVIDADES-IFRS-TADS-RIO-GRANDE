import db from "../config/conexaoSqlite";

export enum UserRole {
    ADMIN = 'admin',
    REGULAR = 'regular'
}

export interface IUser {
    name: string;
    email: string;
    password: string;
    id: number;
    role: string,
}

export class User implements IUser {
    id = 0;
    name: string;
    email: string;
    password: string;
    role: string;

    constructor(name: string, email: string, password: string, role: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static save(user: IUser): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const sql = `INSERT INTO user (name, email, password, role) VALUES (?, ?, ?, ?);`;
            db.run(sql, [user.name, user.email, user.password, user.role], (err) => {
                if(err) {
                    console.log("Error Insert User", err);
                    reject();
                }
                resolve();
            });
            console.log("USUARIO ADICIONADO AO BANCO");
        });
    }

    static getByEmail(email: string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            const sql = `SELECT * FROM user WHERE user.email = '${email}';`;
            db.all(sql, (error, rows) => {
                if(error) {
                    console.log("Error GET User by Email", error);
                    reject();
                }
                const user: IUser = {
                    ...rows[0],
                }
                resolve(user);
            });
        });
    }

    static listAll(): Promise<IUser[]> {
        const list: IUser[] = new Array();
        return new Promise<IUser[]>((resolve, reject) => {
            db.all('SELECT * FROM user', [], (error, rows) => {
                if(error) {
                    console.log("Error GET Users", error);
                    reject();
                }
                rows.forEach(users => {
                    list.push({
                        name: users.name,
                        email: users.email,
                        password: users.password,
                        id: users.id,
                        role: users.role
                    });
                });
                resolve(list);
            });
        });
    }

}