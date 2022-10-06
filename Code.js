function sendMessages(){  
  
   var draft = GmailApp.getDrafts()[0];
   var aliases = GmailApp.getAliases()
   Logger.log(draft);  
   Logger.log(aliases); //returns the list of aliases you have
   Logger.log(aliases[1]);
   var done = "done";
   var ss1 = SpreadsheetApp.openById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").getSheetByName("tosend").activate(); //Add your own Google Sheet in openById function. 
   var lr = ss1.getLastRow(); 
   Logger.log(lr);
}   