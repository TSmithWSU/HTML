 //  Author: Richard Fry
 // Date:  October 20, 2017

function calendar()
//Creates the calendar table for the month specified in the
//      calendarDay parameter. The current date is highlighted in 
//     the table. 
{
    document.write("<table id='calendar_table'>");
    var calDate = new Date("October 24, 2017");
    writeCalTitle(calDate);
    writeDayNames();



    document.write ("</table>");
}

function writeCalTitle(calendarDay)
//Writes the month and year the calendar table
{
    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var thisMonth = calendarDay.getMonth();
    var thisYear = calendarDay.getFullYear();
    document.write("<tr>");
    document.write("<th id='calendar_head' colspan='7' >");
    document.write(monthName[thisMonth] + " " + thisYear);
    document.write("</th>");
    document.write("</tr>");
}						

function writeDayNames()
// Writes the weekday title rows in the calendar table
{
    var dayName = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    document.write("<tr>");
    for (var i = 0; i < dayName.length; i++)
    {
        document.write("<th class='calendar_weekdays'>" + dayName[i] + "</th>");
    }
    document.write("</tr>");
}	 

function daysInMonth(calendarDay)
//returns the number of days in the month from calendarDay 
{
    var thisYear = calendarDay.getFullYear();
    var thisMonth = calendar.getMonth();
    var dayCount = new Array(31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31);
    if (thisYear % 4 == 0)
    {
        if ((thisYear % 100 != 0) || (thisYear % 400 == 0)
            {
            dayCount[1] = 29;
        }
        }
    return dayCount[thisMonth];
}

function writeCalDays(calendarDay)
//determine starting day of week 
//write blank cells preceding starting day
//write cells for each remaining day of month 
{ 
 
 		

}	