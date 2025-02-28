import CjkBreaks from "..";
import { marked } from "marked";
import test from "node:test";
import assert from "assert";

marked.use(new CjkBreaks());

test("basic", t => {
    assert.equal(marked(`你好\n谢谢\n小笼包`), `<p>你好谢谢小笼包</p>\n`);
    assert.equal(marked(`这是\nTom，这是 Jerry。`), `<p>这是\nTom，这是 Jerry。</p>\n`);
    assert.equal(marked(`这是就我的\n“意志”！`), `<p>这是就我的“意志”！</p>\n`);
    assert.equal(marked(`看！\n这是什么！`), `<p>看！这是什么！</p>\n`);
    assert.equal(marked(`子在川上曰：\n“逝者如斯夫，不舍昼夜。”`), `<p>子在川上曰：“逝者如斯夫，不舍昼夜。”</p>\n`);
    assert.equal(marked(`눈이 오는 날, 당신과\n함께라면 눈보라도\n괜찮아요`), `<p>눈이 오는 날, 당신과\n함께라면 눈보라도\n괜찮아요</p>\n`);
});
