// function for get element innerText
function innerTexts(id) {
  const text = document.getElementById(id);
  const textValueSt = text.innerText;
  const textValue = parseFloat(textValueSt);
  return textValue;
}
// function for get element inputValue
function inputText(id) {
  const inputField = document.getElementById(id);
  const inputValueSt = inputField.value;
  const inputValue = parseFloat(inputValueSt);
  return inputValue;
}
// function for set element innerText
function getElement(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}
// function for set element innerText emty
function getInput(id) {
  const inputFieds = document.getElementById(id);
  inputFieds.value = '';
}
// function for set total cost of items
function total(id1, id2, id3) {
  const ch = innerTexts(id1);
  const rs = innerTexts(id2);
  const dr = innerTexts(id3);
  const total = ch + rs + dr;
  return total;
}
// event for kitkat chocolate bye
document.getElementById('kitBtn').addEventListener('click', () => {
  const kitPrice = innerTexts('kitPrice');
  const kitQun = inputText('kitQun');
  getInput('kitQun');

  if (isNaN(kitQun)) {
    alert('please enter a valid number');
    return;
  }
  if (kitQun < 0) {
    alert('bukuchuda quantity ki kokhono 0 er kom hoi');
    return;
  }

  const kitTotal = kitPrice * kitQun;
  const chocolatePrice = innerTexts('chTot');
  const totalChocolate = kitTotal + chocolatePrice;

  getElement('chTot', totalChocolate);

  const totalCost = total('chTot', 'rsTot', 'drTot');
  getElement('total', totalCost);
});
// event for  rose bye
document.getElementById('roseBtn').addEventListener('click', () => {
  const rosePrice = innerTexts('rosePrice');
  const roseQun = inputText('roseQun');
  getInput('roseQun');
  if (isNaN(roseQun)) {
    alert('please enter a valid number');
    return;
  }
  if (roseQun < 0) {
    alert('bukuchuda quantity ki kokhono 0 er kom hoi');
    return;
  }

  const roseTotal = rosePrice * roseQun;
  const roseTotalPrice = innerTexts('rsTot');
  const totalRose = roseTotal + roseTotalPrice;
  getElement('rsTot', totalRose);
  const totalCosts = total('chTot', 'rsTot', 'drTot');
  getElement('total', totalCosts);
});
// event for diary bye
document.getElementById('diaryBtn').addEventListener('click', () => {
  const diaryPrice = innerTexts('diaryPrice');
  const diaryQun = inputText('diaryQun');
  getInput('diaryQun');
  if (isNaN(diaryQun)) {
    alert('please enter a valid number');
    return;
  }
  if (diaryQun < 0) {
    alert('bukuchuda quantity ki kokhono 0 er kom hoi');
    return;
  }

  const diaryTotal = diaryPrice * diaryQun;
  const diaryTotalPrice = innerTexts('drTot');
  const totalDiary = diaryTotal + diaryTotalPrice;
  getElement('drTot', totalDiary);
  const totalCoss = total('chTot', 'rsTot', 'drTot');
  getElement('total', totalCoss);
});
// event for discount coupon
document.getElementById('disBtn').addEventListener('click', () => {
  const disInput = inputText('discount');
  if (disInput === 101) {
    const totalBy = innerTexts('total');
    const discountPrice = (totalBy / 100) * 10;

    const totalDiscountPrice = totalBy - discountPrice;

    getElement('totalCost', totalDiscountPrice);
  } else {
    getElement('dis-rs', 'Please input a valid copun');
  }
});

// budget and total er comparision
document.getElementById('by-all').addEventListener('click', () => {
  if (
    innerTexts('myBudget') < innerTexts('total') ||
    innerTexts('myBudget') < 100 ||
    innerTexts('myBudget') < 0 ||
    isNaN(innerTexts('myBudget'))
  ) {
    alert('Tumer kase eto taka nai tumi aro taka niye aso');
    return;
  } else {
    if (inputText('discount') === 101) {
      const afbg = innerTexts('myBudget') - innerTexts('totalCost');
      getElement('myBudget', afbg);
      const yourBalance = `
      Your request approved successfuly
      Your Current Balance: ${innerTexts('myBudget')}
      `;
      getElement('byAllProduct', yourBalance);
    } else {
      const afbg = innerTexts('myBudget') - innerTexts('total');
      getElement('myBudget', afbg);
      const yourBalance = `
      Your request approved successfuly
      Your Current Balance: ${innerTexts('myBudget')}
      `;
      getElement('byAllProduct', yourBalance);
    }
  }
});

document.getElementById('budget').addEventListener('keyup', e => {
  getElement('myBudget', e.target.value);
});
