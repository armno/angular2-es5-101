function FriendsService() {
	this.names = ['Func', 'Class', 'Meh', 'Yo', 'Node', 'And myself'];

	this.first = function() {
		return this.names[0];
	}.bind(this);
}
