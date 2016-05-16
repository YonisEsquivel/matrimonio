$(function() {
	 var endDate = "June 17, 2016 15:00:00";

	 $('.countdown.styled').countdown({
	   date: endDate,
	   render: function(data) {
	     $(this.el).html("<div>"+ this.leadingZeros(data.days, 2) + " <span>dias</span></div><div class='js'>" + this.leadingZeros(data.hours, 2) + " <span>horas</span></div><div class='js'>" + this.leadingZeros(data.min, 2) + " <span>minutos</span></div><div class='js'>" + this.leadingZeros(data.sec, 2) + " <span>segundos</span></div>");
	   }
	 });

});