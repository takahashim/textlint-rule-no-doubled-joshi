import assert from "power-assert";
import rule from "../src/no-doubled-joshi";
import TextLintTester from "textlint-tester";
var tester = new TextLintTester();
tester.run("no-double-joshi", rule, {
    valid: [
        "私は彼が好きだ",
        "既存のコードの利用", // "の" の例外
        "オブジェクトを返す関数を公開した", // "を" の例外
        "私は彼の鼻は好きだ"
    ],
    invalid: [
        {
            text: "私は彼は好きだ",
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "は" がみつかりました。`,
                    // last match
                    line: 1,
                    column: 4
                }
            ]
        },
        {
            text: "材料不足で代替素材で製品を作った。",
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 10
                }
            ]
        },
        {
            text: "列車事故でバスで振り替え輸送を行った。 ",
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 8
                }
            ]
        },
        {
            text: "洋服をドラム式洗濯機でお湯と洗剤で洗い、乾燥機で素早く乾燥させる。",
            options: {
                "min_interval": 2
            },
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 17
                },
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 24
                }
            ]
        },
        {
            text: "法律案は十三日の衆議院本会議で賛成多数で可決され、参議院に送付されます",
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 20
                }
            ]
        },
        {
            text: "彼女は困り切った表情で、小声で尋ねた。",
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 15
                }
            ]
        },
        {
            text: "白装束で重力のない足どりでやってくる",
            options: {
                "min_interval": 2
            },
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "で" がみつかりました。`,
                    line: 1,
                    column: 13
                }
            ]
        },
        {
            text: "既存のコードの利用",
            options: {
                strict: true
            },
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "の" がみつかりました。`,
                    line: 1,
                    column: 7
                }
            ]
        },
        {
            text: "これは`obj.method`は何をしているかを示します。",
            errors: [
                {
                    message: `一文に二回以上利用されている助詞 "は" がみつかりました。`,
                    line: 1,
                    column: 16
                }
            ]
        }
    ]
});