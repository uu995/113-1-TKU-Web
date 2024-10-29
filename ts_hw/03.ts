// 定義輸出九九乘法表的函數
function printMultiplicationTable(): void {
    for (let i = 1; i <= 9; i++) {
      let row = ""; // 儲存每一行的輸出
      for (let j = 1; j <= 9; j++) {
        row += `${i} x ${j} = ${i * j}\t`; // \t 用來對齊表格格式
      }
      console.log(row);
    }
  }
  
  // 呼叫函數來列印九九乘法表
  printMultiplicationTable();

  
  