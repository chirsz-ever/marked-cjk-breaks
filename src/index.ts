import easta from "easta";
import type { Token } from "marked";

// punctuations but the "East_Asian_Width" is not "F" or "W" or "H", see https://www.w3.org/TR/clreq/#table_of_punctuation_marks
const extra_punctuations = '‼⁇⸺—…⋯-–·‧/“”‘’●•';

const isNoBreak = (c: string) => extra_punctuations.includes(c) || 'FWH'.includes(easta(c));

export class CjkBreaks {
    walkTokens(token: Token): void {
        if (token.type === 'text') {
            token.text = token.text.replace(/(\P{sc=Hangul})\r?\n(\P{sc=Hangul})/ug, (m: string, a: string, b: string) => {
                if (isNoBreak(a) && isNoBreak(b)) {
                    return a + b;
                }
                return m;
            });
        }
    }
};

export default CjkBreaks;
