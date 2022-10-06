function sendMessages(){  
  
   var draft = GmailApp.getDrafts()[0];
   var aliases = GmailApp.getAliases()
   Logger.log(draft);  
   Logger.log(aliases); //returns the list of aliases you have
   Logger.log(aliases[1]);
   var done = "done";
   
}