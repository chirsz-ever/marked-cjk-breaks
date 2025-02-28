# marked-cjk-breaks

[![NPM version](https://img.shields.io/npm/v/marked-cjk-breaks.svg?style=flat)](https://www.npmjs.com/package/marked-cjk-breaks)

Marked plugin to suppress linebreaks between east asian characters.

## Usage

```js
import {marked} from "marked";
import CjkBreaks from "marked-cjk-breaks";

marked.use(new CjkBreaks());

marked(`你好
谢谢
小笼包`);
// <p>你好谢谢小笼包</p>
```

## Reference

[marked](https://github.com/markedjs/marked)

[markdown-it-cjk-breaks](https://github.com/markdown-it/markdown-it-cjk-breaks)

[Requirements for Chinese Text Layout](https://www.w3.org/TR/clreq)

## License

[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)
