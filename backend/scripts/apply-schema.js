require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const fs = require('fs');
const path = require('path');
const db = require('../db');

const applySchema = async () => {
  try {
    const schemaPath = path.join(__dirname, '..', '..', 'database', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    await db.query(schema);

    console.log('Database schema applied successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Failed to apply database schema:', err);
    process.exit(1);
  }
};

applySchema();
