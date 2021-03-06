import expressLoader from './express';

import startServer from './server';

export default async ({ expressApp }) => {
  try{
  
    await expressLoader({ app: expressApp });
    console.info(`✌️ Express loaded `);
  
    startServer({ app: expressApp });
    console.info(`✌️ Server loaded `);
  
    console.info('✌️ Loaders completed');
  } catch(e){
    console.error(e)
  }
};
