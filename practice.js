const menu = [
    {name:"ジェルネイル", price:6000, minutes: 60},
    {name:"ワンカラー", price:4500, minutes: 45},
    {name:"フットネイル", price:7000, minutes: 75}
];
console.log("全" + menu.length + "メニュー");

let total = 0;

for (let index = 0; index < menu.length; index++) {
    console.log(menu[index].name + ':' + menu[index].price + '円(' + menu[index].minutes + '分)');
    total = total + menu[index].price;
}
console.log("合計" + total + "円");
