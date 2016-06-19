function Githuber(id,total_lang_data){
  this.id = id;
  this.total_lang_data = total_lang_data;
}

Githuber.prototype.CountPercentage = function() {
  var lang_percentage = [];
  // count element
  var counts = {}; 
  for(var i = 0; i< this.total_lang_data.length; i++) {
      var num = this.total_lang_data[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  var amount = this.total_lang_data.length;

  // count percentage
  Object.keys(counts).forEach(function(key){
    var lang = {};
    lang["language"] = key;
    lang["percentage"] = (parseFloat(counts[key] / amount)*100).toFixed(1);
    lang_percentage.push(lang);
  });
  
  return lang_percentage;
}

// module.exports = Githuber;