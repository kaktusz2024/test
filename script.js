// Utility scripts for data manipulation, string operations, and array operations

// Data Manipulation Functions
function convertToJson(data) {
    return JSON.stringify(data);
}

function parseJson(json) {
    return JSON.parse(json);
}

// String Operations
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}

// Array Operations
function removeDuplicates(array) {
    return [...new Set(array)];
}

function flattenArray(array) {
    return array.reduce((acc, val) => acc.concat(val), []);
}

// Exporting functions
module.exports = {
    convertToJson,
    parseJson,
    capitalizeFirstLetter,
    truncateString,
    removeDuplicates,
    flattenArray
};
