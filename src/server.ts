/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('🗄️ Database connection established');
    app.listen(config.port, () => {
      console.log(`🌐Our server is running on port  ${config.port}`);
    });
  } catch (err) {
    console.log('⚠️ Failed to connect to database', err);
  }
}

main();
