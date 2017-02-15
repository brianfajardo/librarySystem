(function () {
    // companies.js: a simple library containing data of the top three largest internet companies by revenue (Wikipedia)
    // example usage: companiesLibrary.amazon.industry ==> 'E-commerce'

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

    window.companiesLibrary = companiesLibrary

})();

console.log(companiesLibrary) //companiesLibrary is accessible in the window/global scope.