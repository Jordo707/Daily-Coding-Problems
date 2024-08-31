/*

Write a function to flatten a nested dictionary. Namespace the keys with a period.

For example, given the following dictionary:

{
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}
it should become:

{
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}
You can assume keys do not contain dots in them, i.e. no clobbering will occur.

*/

const flattener = (dict, parentKey = '', result = {}) => {
    for (const [key, value] of Object.entries(dict)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            flattener(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
};

// Test Cases
const dict1 = {
                "key": 3,
                "foo": {
                    "a": 5,
                    "bar": {
                        "baz": 8
                    }
                }
            }

console.log(flattener(dict1)) /*
                                {
                                    "key": 3,
                                    "foo.a": 5,
                                    "foo.bar.baz": 8
                                }
*/
