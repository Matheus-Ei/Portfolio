CREATE TABLE IF NOT EXISTS project (
  id SERIAL PRIMARY KEY,

  logo BYTEA NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,

  host_link VARCHAR(500),
  code_link VARCHAR(500),

  start_date DATE NOT NULL,
  end_date DATE
);

CREATE TABLE IF NOT EXISTS image (
  id SERIAL PRIMARY KEY,

  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  data BYTEA NOT NULL,

  project_id INTEGER NOT NULL,
  CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS programming_language (
  id SERIAL PRIMARY KEY,

  logo BYTEA NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,

  project_id INTEGER NOT NULL,
  CONSTRAINT fk_project_lang FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);
