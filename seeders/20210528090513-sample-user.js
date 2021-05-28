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
        password: "$2b$10$AHlMuxNKohLyYljchCTiouyfBQRvZUYlOMHSl3OZwi3nzfwy6Fr5e",
        isAdmin: true,
        apellido1: "Porras",
        apellido2: "Gallego",
        edad: 24,
        direccion: "c/ Magnifico 3",
        cp: 46022,
        email: "juanfe@cv.es",
        telefono: 616367359,
      },
      {
        nombre: "Alejandro",
        password: "$2b$10$R74orrm2ZrAtglf5siTVJurWnBj2LuNoiVGyTtaiacY0DGbtbd5lu",
        isAdmin: true,
        apellido1: "Urbina",
        apellido2: "Gonzalez",
        edad: 31,
        direccion: "c/ alameda 3",
        cp: 46002,
        email: "alejandro@cv.es",
        telefono: 612377659,
      },
      {
        nombre: "Marcos",
        password: "$2b$10$h9YduQ1UPpHPli403ump1OM4Le2z2G5WrQsKLo55ymYYx0bg1yrzW",
        isAdmin: false,
        apellido1: "domingo",
        apellido2: "Gonzalez",
        edad: 23,
        direccion: "c/turia 32",
        cp: 46004,
        email: "marcos@cv.es",
        telefono: 611387659,
      },
      {
        nombre: "Cristina",
        password: "$2b$10$h9YduQ1UPpHPli403ump1OM4Le2z2G5WrQsKLo55ymYYx0bg1yrzW",
        isAdmin: false,
        apellido1: "Garcia",
        apellido2: "Chulia",
        edad: 35,
        direccion: "c/alberic 8",
        cp: 46023,
        email: "cristina@cv.es",
        telefono: 617397669,
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
