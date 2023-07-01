// //import type { FC } from 'react';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const handleSubmit= async (formData: FormData)  => {
//     try {
//       const { projectCode, projectName, startDate, endDate, notes } = formData;
  
//       // Create a new user record in the database
//       const newProject = await prisma.project.create({
//         data: {
//           projectCode,
//           projectName,
//           startDate,
//           endDate, 
//           notes,
//         },
//       });
  
//       console.log('New user created:', newProject);
//     } catch (error) {
//       console.error('Error creating user:', error);
//     } finally {
//       // Close the Prisma client connection
//       await prisma.$disconnect();
//     }
 
// }; 
  
// export default handleSubmit;
  
  
  
  
  