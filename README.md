# weblib
To import a script, add the following to your HTML `<head>` or before the closing `<body>` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/lemonade-js/weblib@main/scriptname.js"></script>
```
Replace `scriptname.js` with the file you want (ex. `lemkit.js`, `cookiemgr.js`).



# Functions

## lemkit.js
### getNum(min, max)
-   Description: Returns a random number
-   Parameters:
    - `min` (`number`): Minimum value
    - `max` (`number`): Maximum value
- Returns (`num`): Random number
- Example:
```javascript
const num = lemkit.getNum(0, 10);

console.log(num);
```

### getInt(min, max)
-   Description: Returns a random whole number
-   Parameters:
    - `min` (`number`): Minimum value
    - `max` (`number`): Maximum value
- Returns (`num`): Random number
- Example:
```javascript
const num = lemkit.getInt(0, 10);

console.log(num);
```

### getItem(array)
-   Description: Returns a random item from an array
-   Parameters:
    - `array` (`array`): Array to get item from
- Returns (`any`): Random item
- Example:
```javascript
const items = ['goober', 'cat', 'dog', 'bird', true, false, 7, 8.5];
const item = lemkit.getItem(items);

console.log(item);
```

### arrayShuffle(array)
-   Description: Shuffles an array
-   Parameters:
    - `array` (`array`):
- Returns (`array`): Shuffled array
- Example:
```javascript
const items = ['goober', 'cat', 'dog', 'bird', true, false, 7, 8.5];
const shuffledItems = lemkit.arrayShuffle(items);

console.log(shuffledItems);
```

### getChance(...chances)
-   Description: Generates a random chance based on the inputed values
-   Parameters:
    - `...chances` (`number`): Chances
- Example:
```javascript
const animals = ['cat', 'dog', 'bird'];
const chance = lemkit.getChance(10, 8, 3);

/*
10 in 21 chance it will return 0,
8 in 21 for 1,
and 3 in 21 for 2
*/
console.log(animals[chance]);
```

### wait(seconds, showCountdown) (async function)
-   Description: Waits a specified amount of time in seconds before allowing further code to run
-   Parameters:
    - `seconds` (`number`): Time to wait in seconds
- Example:
```javascript
// This function needs to be async
async function waitExample() {
    console.log('Waiting 5 seconds...');

    await lemkit.wait(5);

    console.log('Hello :)');
}

waitExample();
```



## cookiemgr.js
### get(name)
-   Description: Gets a cookie's value
-   Parameters:
    - `name` (`string`): Cookie name
- Example:
```javascript
cookiemgr.get('new best');
```

### set(name)
-   Description: Sets a cookie's value, and an optional expiration date
-   Parameters:
    - `name` (`string`): Cookie name
    - `value` (`string`): Cookie value
    - `expiration` (`timestamp`, optional): Cookie expiration date
- Example:
```javascript
let highScore = 42000;
let days = 30 * 24 * 60 * 60 * 1000;

// Not recommended for high scores, just an expiration example
cookiemgr.set('new best', highScore, Date.now() + days);
```

### delete(name)
-   Description: Deletes a cookie
-   Parameters:
    - `name` (`string`): Cookie name
- Example:
```javascript
console.log('Wiping user data...');
cookiemgr.delete('new best');
cookiemgr.delete('username');
```
