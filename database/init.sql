CREATE TABLE IF NOT EXISTS project (
  id SERIAL PRIMARY KEY,

  logo TEXT NOT NULL,
  title VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,

  host_link VARCHAR(500),
  code_link VARCHAR(500),

  start_date DATE,
  end_date DATE
);

CREATE TABLE IF NOT EXISTS project_image (
  id SERIAL PRIMARY KEY,

  src TEXT NOT NULL,
  alt VARCHAR(255),

  project_id INTEGER REFERENCES project(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS technology (
  id SERIAL PRIMARY KEY,

  icon VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS project_technology (
  project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
  technology_id INTEGER REFERENCES technology(id) ON DELETE CASCADE,

  PRIMARY KEY (project_id, technology_id)
);

CREATE TABLE IF NOT EXISTS skill (
  id SERIAL PRIMARY KEY,

  icon VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS skill_certificate (
  id SERIAL PRIMARY KEY,

  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  duration INTEGER NOT NULL CHECK (duration > 0),
  data TEXT NOT NULL,

  skill_id INTEGER REFERENCES skill(id) ON DELETE CASCADE
);
