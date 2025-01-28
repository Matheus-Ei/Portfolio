// Libraries
import connection from './connection';

class Operations {
  public async query(statement: string, values?: unknown[]) {
    return await connection.query({ query: statement, values: values ?? [] });
  }
}

export default new Operations();
