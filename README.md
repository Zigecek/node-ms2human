## Function
* Example response:
    ```JS
    const ms2human = require('ms2human');

    console.log(ms2human(8941));
    // 02:29:01

    console.log(ms2human('41'));
    // 00:41

    console.log(ms2human(92));
    // 01:32

    console.log(ms2human(0));
    // undefined

    console.log(ms2human(true));
    // undefined

    console.log(ms2human('xx'));
    // undefined
    ```
## Installation
* `npm i ms2human --save`