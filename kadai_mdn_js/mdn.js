const today =new Date() ;

const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();

console.log(year + "年" + month + "月" + date + "日");



















/*const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(today.toLocaleDateString("ja-JP-u-ca", options));   */
