import app from './app';
import config from './config/config';

const startServer = () => {
  try {
    app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
  } catch (err) {
    console.error('Failed to start the server', err);
    process.exit(1);
  }
};

startServer();
