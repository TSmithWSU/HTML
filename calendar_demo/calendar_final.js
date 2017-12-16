

 /*  Author: Richard Fry
 // Date:  October 20, 2017

   Function List:
   calendar(calendarDay)
      Creates the calendar table for the month specified in the
      calendarDay parameter. The current date is highlighted in 
      the table.

   
   writeDayTitle()
      Writes the weekday title rows in the calendar table

   daysInMonth(calendarDay)
      Returns the number of days in the month from calendarDay

   writeCalDays(calendarDay)
      Writes the daily rows in the calendar table, highlighting
      calendarDay

*/

function calendar()
{
document.write("<table id='calendar_table'>");
var calDate = new Date("October 20, 2017");

writeCalTitle(calDate);
writeDayNames();
writeCalDays(calDate);
document.write("</table>");
}
function writeCalTitle(calendarDay)
{      //Writes the title row in the calendar table
	var monthName = new Array ("January", "February", "March",
	    "April", "May", "June", "July", "August",
			"September", "October", "November", "December");		
 var thisMonth=calendarDay.getMonth();
 var thisYear=calendarDay.getFullYear();
 
 document.write("<tr>");
 document.write("<th id ='calendar_head' colspan = '7'>");
 document.write(monthName[thisMonth] + " " + thisYear);	
 document.write("</th>");
 document.write("</tr>");
 }								

function writeDayNames()
{
 var dayName = new Array ("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
 document.write("<tr>");
 for (var i=0;i<dayName.length;i++)
  {
	 document.write("<th class ='calendar_weekdays'> " + dayName[i] + "</th>"); 
	}
	 document.write("</tr>"); 
}	 

function daysInMonth(calendarDay)
{
  var thisYear = calendarDay.getFullYear();
	var thisMonth = calendarDay.getMonth();
	var dayCount = new Array (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if (thisYear % 4 == 0)
	 {
	  if ((thisYear % 100 != 0) || (thisYear % 400 == 0))
		  {dayCount[1] = 29; //leap year
			}
		}	 
	return dayCount[thisMonth];//returns number of days in month
}	

function writeCalDays(calendarDay)
{
 //determine starting day of week
 //write blank cells preceeding starting day
 //write cells for each remaining day of month
 
 var dayCount = 1;
 var totalDays = daysInMonth(calendarDay);
 var currentDay = calendarDay.getDate();
 calendarDay.setDate(1); //set the date to the 1st date of month
 var weekDay = calendarDay.getDay(); //day of week of 1st day
 
 document.write("<tr>");
 for (var i=0; i < weekDay; i++)
 {
  document.write("<td></td>");
 }	
 while (dayCount <= totalDays) 
  {
	 //write the table rows and cells
	 if (weekDay == 0) document.write("<tr>");
	 if (dayCount == currentDay)
	 { //highlight it
	  document.write("<td class='calendar_dates' id='calendar_today'>" +dayCount+"</td>");
	 }
	 else
	 {
	 document.write("<td class='calendar_dates'>"+dayCount+"</td>");
	 }
	 if (weekDay == 6) document.write("</tr>");
	 //then move to the next day
	 dayCount++;
	 calendarDay.setDate(dayCount);
	 weekDay = calendarDay.getDay();
	} 
	document.write("</tr>");
}	