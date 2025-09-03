const { initializeServices } = require('../lib/firebase-services');

async function init() {
  try {
    console.log('Initializing services...');
    await initializeServices();
    console.log('Services initialized successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing services:', error);
    process.exit(1);
  }
}

init();