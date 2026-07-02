import { initializeServices, initializeDetailedServices } from './firebase-services';

export async function initializeDatabase() {
  try {
    console.log('Initializing database...');
    
    // Initialize basic services
    await initializeServices();
    
    // Initialize detailed services
    await initializeDetailedServices();
    
    console.log('Database initialization completed successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}