const db = require('./db')
const Mutation = {
   createStudent:(root, args, context, info) => {
      return db.students.create({
         collegeId: args.collegeId,
         firstName: args.firstName,
         lastName: args.lastName})
   },

   addStudent: (root, args, context, info) => {
      const id = db.students.create({
         collegeId: args.collegeId,
         firstName: args.firstName,
         lastName: args.lastName
      })
      return db.students.get(id);
   },

   addCollege: (root, args, context, info) => {
      const id = db.colleges.create({
         name: args.name,
         location: args.location,
         rating: args.rating
      })
      return db.colleges.get(id);
   },

   addCollegeById: (root, args, context, info) => {
      const newCollege = db.colleges.create({
         id: args.id,
         name: args.name,
         location: args.location,
         rating: args.rating
      })
      return db.colleges.get(newCollege);
   }
}

//for each single student object returned,resolver is invoked
const Student = {
   college:(root) => {
      return db.colleges.get(root.collegeId);
   }
}

const Query = {
   studentById: (root, args, context, info) => {
      return db.students.get(args.id);
   },
   colleges: () => {
      return db.colleges.list();
   }
}

module.exports = {Query, Student, Mutation}