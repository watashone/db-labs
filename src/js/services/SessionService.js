import pool from "../db.js";

class SessionService {
    async createSession(data) {
        const {id, login_time, logout_time, User_id} = data;
        const values = [id, login_time, logout_time, User_id];
        const query = `INSERT INTO Session (id, login_time, logout_time, User_id)
                       VALUES (?, ?, ?, ?)`;
        return pool.query(query, values);
    }

    async getSessions() {
        const [dataRows] = await pool.query('SELECT * FROM Session');
        return dataRows;
    }

    async getOneSession(id) {
        const [dataRow] = await pool.query('SELECT * FROM Session WHERE id = ?', [id]);
        return dataRow[0];
    }

    async updateSession(data) {
        const {id, login_time, logout_time, User_id} = data;
        const values = [login_time, logout_time, User_id, id];
        const query = `UPDATE Session
                       SET login_time  = ?,
                           logout_time = ?,
                           User_id     = ?
                       WHERE id = ?`;
        return pool.query(query, values);
    }

    async deleteSession(id) {
        return pool.query('DELETE FROM Session WHERE id = ?', [id]);
    }

    async userExists(id) {
        const [dataRow] = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
        return dataRow.length > 0;
    }
}

export default new SessionService();