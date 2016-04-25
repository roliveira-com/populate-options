# populate-options
Simple functions to populate the option fields for year, month and days in Brazilian Portuguese.

This is a very simple approach. The functions require only the id od SELECT field to be populated. The populate day method cover days from 1 to 31. The Month options cover from Janeiro to Dezembro with a special treatment to escape de Ç when populating this wod at the VALUE field at OPTIONS element, this prevent problems with databases. The year function populates years from 1970 to 2000. You can setup the day and year range by changing the I variable whithin the loop. 

Enjoy!
