'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
        nombre: "Juan Felipe",
        password: "$2b$10$6CU2Z0A8N3ZxpfNnHsD8z.JpQoQDp0I0hgcEgaJrJeva6LmFBpDGC",
        //pass:gitlog
        isAdmin: true,
        apellido1: "Porras",
        apellido2: "Gallego",
        edad: 24,
        direccion: "c/ Magnifico 3",
        cp: 46022,
        email: "juanfe@cv.es",
        telefono: 616367359,
        updatedAt: "2021-05-28",
        createdAt: "2021-05-28"
      },
      {
        nombre: "Alejandro",
        password: "$2b$10$Mz7t6/vkgd8E0LzIFIUtPO3SSbC2KiSQSloskqq10zIEeuvEqD5dC",
        //pass:gitpush
        isAdmin: true,
        apellido1: "Urbina",
        apellido2: "Gonzalez",
        edad: 31,
        direccion: "c/ alameda 3",
        cp: 46002,
        email: "alejandro@cv.es",
        telefono: 612377659,
        updatedAt: "2021-05-28",
        createdAt: "2021-05-28"
      },
      {
        nombre: "Marcos",
        password: "$2b$10$DgllQUK2jDcIigM4SrNimO03SRTJe.pQWvFgA0PDZmAAOZWGr3jXG",
        //pass:gitmerge
        isAdmin: false,
        apellido1: "domingo",
        apellido2: "Gonzalez",
        edad: 23,
        direccion: "c/turia 32",
        cp: 46004,
        email: "marcos@cv.es",
        telefono: 611387659,
        updatedAt: "2021-05-28",
        createdAt: "2021-05-28"
      },
      {
        nombre: "Cristina",
        password: "$2b$10$A.iOiEC9Rej18ka2b4sHae6dX1DoSe7sGDH57AgDsGs94EF9a67B2",
        //pass:gitpull
        isAdmin: false,
        apellido1: "Garcia",
        apellido2: "Chulia",
        edad: 35,
        direccion: "c/alberic 8",
        cp: 46023,
        email: "cristina@cv.es",
        telefono: 617397669,
        updatedAt: "2021-05-28",
        createdAt: "2021-05-28"
      },
    ]

    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
