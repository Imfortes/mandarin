// function rangeStep() {
//     let values = [];
//
//     $("datalist > option").each((index, item) => {
//         values.push($(item).html());
//     });
//
//     let min = (obj) => {
//         var a = obj[0];
//         for (var i = 1; i < obj.length; i++) {
//             if (obj[i] < a) {
//                 a = obj[i];
//             }
//         }
//         return a;
//     };
//
//     $("input[type='range']").on("input", (e) => {
//         let element = $(e.currentTarget);
//         let value = element.val();
//
//         let differenceArr = [];
//         values.forEach((item, index) => {
//             differenceArr.push(Math.abs(item - value));
//         });
//         let minDifferense = min(differenceArr);
//         let newValue = values[differenceArr.indexOf(minDifferense)];
//         element.val(newValue);
//     });
// }
