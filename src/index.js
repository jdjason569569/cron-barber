const cron = require('node-cron');
const pool = require('./database.js'); 

const task = cron.schedule('* * * * *', async () => { 
  try {
    const client = await pool.connect();
    // Your database query, update, or other operation here
    const result = await client.query('SELECT * FROM users'); 
    await client.release();
    console.log('Database operation successful!');
  } catch (error) {
    console.error('Error:', error);
  }
});

task.start();