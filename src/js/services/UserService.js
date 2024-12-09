import pool from "../db.js"

class UserService {
    async createUser(data) {
        const {id, name, password, email, creationDate, lastLoginDate, roleId} = data;
        const values = [id, name, password, email, creationDate, lastLoginDate, roleId];
        const query = `INSERT INTO User (id, name, password, email, account_creation_date, last_login_date, Role_id)
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        return pool.query(query, values);
    }

    async getUsers() {
        const [dataRows] = await pool.query('SELECT * FROM User');
        return dataRows;
    }

    async getOneUserById(id) {
        const [dataRow] = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
        return dataRow[0];
    }

    async getOneUserByEmail(email) {
        const [dataRow] = await pool.query('SELECT * FROM User WHERE email = ?', [email]);
        return dataRow[0];
    }

    async updateUser(data) {
        const {id, name, password, email, lastLoginDate, roleId} = data;
        const values = [name, password, email, lastLoginDate, roleId, id];
        const query = `UPDATE User
                       SET name            = ?,
                           password        = ?,
                           email           = ?,
                           last_login_date = ?,
                           Role_id         = ?
                       WHERE id = ?`;
        return pool.query(query, values);
    }

    async deleteUser(id) {
        return pool.query('DELETE FROM User WHERE id = ?', [id]);
    }

    async roleExists(id) {
        const [dataRow] = await pool.query('SELECT * FROM Role WHERE id = ?', [id]);
        return dataRow.length > 0;
    }
}

export default new UserService();