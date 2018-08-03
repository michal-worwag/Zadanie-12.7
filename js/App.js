// OGÓLNA FUNKCJA
function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');

  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);

  	return element;
}

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3467',
  'X-Auth-Token': 'd9394b83f55d933e6a170e949f1598b0',
  'Content-Type': 'application/json; charset=utf-8'
};

fetch(baseUrl + '/board', { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

function setupColumns(columns) {
	columns.forEach(function(column) {
		  var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
  }

function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}