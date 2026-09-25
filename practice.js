const menu = [
    {name:"ジェルネイル", price:6000, minutes:60},
    {name:"ワンカラー", price:4500 ,minutes:45},
    {name:"フットネイル", price:7000, minutes:75},
    {name:"デザインネイル", minutes:90}
]
console.log(`全${menu.length}メニュー`);
let total = 0;
for (let i = 0; i < menu.length; i++) {
    const item = menu[i];
    let priceText;

    if(item.price === undefined){
    priceText = "要相談";
    } else {
        priceText = `${item.price}円`;
        total = total + item.price;
    }
    console.log(`${item.name}:${priceText}(${item.minutes}分)`);
}
console.log(`合計${total}円`);

