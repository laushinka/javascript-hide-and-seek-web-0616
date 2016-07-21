function getFirstSelector(selector) {
  let result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  let result = document.querySelector("#nested .target");
  return result;
}

function increaseRankBy(n) {
  let result = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < result.length; i++) {
    result[i].innerHTML = (parseInt(result[i].innerHTML) + n).toString();
  }
  return result;
}

// function increaseRankBy(n) {
//   let result = document.querySelectorAll('ul.ranked-list li');
//   result.forEach(function(element, index, array) {
//     element.innerHTML = (parseInt(element.innerHTML) + n).toString();
//   })
//   return result;
// }

function deepestChild() {
  let result = document.querySelector("#grand-node div div div div")
  return result
}
