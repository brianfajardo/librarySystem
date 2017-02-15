(function () {

    var libraryStorage = {};

    function librarySystem(libraryName, callback) {
        if (arguments.length > 1) {
            // Creating and storing a new library object and its properties within libraryStorage
            libraryStorage[libraryName] = callback();
        } else {
            // If library already exist, return libraryName object
            return libraryStorage[libraryName];
        }
    };
    // Make librarySystem() accessible in the window/global scope
    window.librarySystem = librarySystem; 

})();

//Example use:
librarySystem('companiesLibrary', function(){
    var amazon = {
        rank: 1,
        industry: 'E-commerce',
        revenue: '$107 billion USD',
        employees: 268908,
        headquarters: 'Seattle, Washington, USA'
    };

    var google = {
        rank: 2,
        industry: 'Search',
        revenue: '$74.98 billion USD',
        employees: 61814,
        headquarters: 'Mountain View, California, USA'
    };

    var facebook = {
        rank: 3,
        industry: 'Social',
        revenue: '$17.93 billion USD',
        employees: 12691,
        headquarters: 'Menlo Park, California, USA'
    };

    var companiesLibrary = {
        amazon: amazon,
        google: google,
        facebook: facebook,
    }

    return companiesLibrary;
});
