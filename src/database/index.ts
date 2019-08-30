import { Pool } from 'pg';

// tslint:disable-next-line:max-line-length
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/reloadextension';

const pool: Pool = new Pool({
    application_name: 'reload-extension-server',
    connectionString,
});

export {
    pool,
};