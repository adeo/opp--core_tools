# @core/tools

#### Why:
Because it's have not anywhere... 

#### What:
Helpers toolkit, provide some often use functions. 
This is one of dependenies for [@core/core](https://github.com/adeo/opp--core_core) module.

#### Basic usage:
```javascript
const { timer } = require('@core/tools');

(async () => {
    await timer.wait(1000);
    await timer.immediate();
    await timer.tick();
});
```

```javascript
const { object } = require('@core/tools');

let res = object.ksort({
    b: 1,
    c: 2,
    a: 3,
});

console.log(res); // { a: 3, b: 1, c: 2 }
```

## Maintainers
Leonid Levkin < Leonid.Levkin@leroymerlin.ru >