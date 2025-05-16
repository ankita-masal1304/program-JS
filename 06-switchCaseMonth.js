
var month = function (monthOfYear){
  switch (monthOfYear) {
    case 1:
        console.log(`${monthOfYear} - January`);
    break;
 case 2:
        console.log(`${monthOfYear} - Feb`);
        break;
 case 3:
        console.log(`${monthOfYear} - March`);
        break;
 case 4:
        console.log(`${monthOfYear} - April`);
        break;
 case 5:
        console.log(`${monthOfYear} - May`);
        break;
 case 6:
        console.log(`${monthOfYear} - June`);
        break;
 case 7:
        console.log(`${monthOfYear} - July`);
        break;
 case 8:
        console.log(`${monthOfYear} - August`);
        break;
 case 9:
        console.log(`${monthOfYear} - September`);
        break;
 case 10:
        console.log(`${monthOfYear} - october`);
        break;
 case 11:
        console.log(`${monthOfYear} - November`);
        break;
 case 12:
        console.log(`${monthOfYear} - December`);
        break;

 default:
    console.log(`Invalid Data: ${monthOfYear}`);
     break;

  }
};

month(0);
month(2);
month(5);
month(12);
month(15);
month(100);
