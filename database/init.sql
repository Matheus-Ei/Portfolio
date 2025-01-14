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

CREATE TABLE IF NOT EXISTS technologies (
  id SERIAL PRIMARY KEY,

  logo TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS project_technologies (
  project_id INTEGER NOT NULL,
  tech_id INTEGER NOT NULL,

  PRIMARY KEY (project_id, tech_id),

  CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE,
  CONSTRAINT fk_tech FOREIGN KEY (tech_id) REFERENCES technologies(id) ON DELETE CASCADE
);

