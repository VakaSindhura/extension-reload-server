import { QueryResult } from 'pg';

import { pool } from './index';

interface Result<T> extends QueryResult {
    rows: T[];
}

export default async <T>(query: string): Promise<T[]> => {
    const result: Result<T> =  await pool.query(query);
    return result.rows;
};