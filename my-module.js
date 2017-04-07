var sum = function(a, b){
  return sumPrivate(a, b);
}

var sumPrivate = function(a, b){
  return a + b;
}

module.exports = {
  myExportedFunction : sum
}


