CREATE TABLE IF NOT EXISTS project (
  id SERIAL PRIMARY KEY,

  logo TEXT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,

  host_link VARCHAR(500),
  code_link VARCHAR(500),

  start_date DATE NOT NULL,
  end_date DATE
);

CREATE TABLE IF NOT EXISTS image (
  id SERIAL PRIMARY KEY,

  data TEXT NOT NULL,

  project_id INTEGER NOT NULL,
  CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS programming_language (
  id SERIAL PRIMARY KEY,

  logo TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS project_language (
  project_id INTEGER NOT NULL,
  language_id INTEGER NOT NULL,

  PRIMARY KEY (project_id, language_id),

  CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE,
  CONSTRAINT fk_language FOREIGN KEY (language_id) REFERENCES programming_language(id) ON DELETE CASCADE
);

