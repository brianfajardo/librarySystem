// window.companiesJS has an original value
window.companiesLibrary = 'Example original string';

// companiesJS loads
(function () {
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

    if (typeof librarySystem !== 'undefined') {
        // Use librarySystem 
        librarySystem('companiesLibrary', function () {
            return companiesLibrary;
        });
    } else {
        var oldCompaniesLibrary = window.companiesLibrary; /* 'Example original string' */
        companiesLibrary.noConflict = function () {
            window.companiesLibrary = oldCompaniesLibrary;
            return companiesLibrary; /* closure scope */
        };
        // Create companiesLibrary in the window
        window.companiesLibrary = companiesLibrary;
    }

})();

// Resetting window.companiesLibrary to the original value
// .noConflict() will also return the companiesLibrary object
var companiesJS = companiesLibrary.noConflict();

// We can still reference the original string
console.log(companiesLibrary)

// We can also reference the companiesLibrary library in the IIFE
console.log(companiesJS.amazon.headquarters)
