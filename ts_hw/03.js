// 定義輸出九九乘法表的函數
function printMultiplicationTable() {
    for (var i = 1; i <= 9; i++) {
        var row = ""; // 儲存每一行的輸出
        for (var j = 1; j <= 9; j++) {
            row += "".concat(i, " x ").concat(j, " = ").concat(i * j, "\t"); // \t 用來對齊表格格式
        }
        console.log(row);
    }
}
// 呼叫函數來列印九九乘法表
printMultiplicationTable();
