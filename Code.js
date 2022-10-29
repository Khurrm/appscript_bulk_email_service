function sendMessages(){  
  
   let draft = GmailApp.getDrafts()[0];
   let aliases = GmailApp.getAliases()
   Logger.log(draft);  
   Logger.log(aliases); //returns the list of aliases you have
   Logger.log(aliases[1]);
   let done = "done";
   let ss1 = SpreadsheetApp.openById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").getSheetByName("tosendXXX").activate(); //Add your own Google Sheet in openById function. 
   let lr = ss1.getLastRow(); 
   Logger.log(lr);
   
   let quotaLeft = MailApp.getRemainingDailyQuota(); // to check the daily quota.
   Logger.log(quotaLeft);
   
   for (let i = 2; i <=lr; i++){
   let interim = ss1.getRange(i,5).getValue(); 
   Logger.log(interim);
   if(interim != "done")
   
   {
   let candidate = 
      {
        assetvalue: ss1.getRange(i,1).getValue(),
        first_name: ss1.getRange(i,2).getValue(),
        last_name : ss1.getRange(i,3).getValue(),
        currentemail: ss1.getRange(i,4).getValue(),
        model: ss1.getRange(i,5).getValue(),
        serialnumber: ss1.getRange(i,6).getValue()
                
      };
   let temple = HtmlService.createTemplateFromFile('XXXSend.html'); //mention the name of the file as in Appscript
   temple.candidate = candidate; 
   let message = temple.evaluate().getContent();
   let currentemail = ss1.getRange(i,4).getValue();   
   Logger.log(currentemail);
   let subjectLine = "Hi " + candidate.first_name + " - you are XXXXXX";
   let messageBody = "Hi " + candidate.first_name;
  
   SpreadsheetApp.flush();
   GmailApp.sendEmail(currentemail, subjectLine,messageBody,{'from':aliases[1], name:"Notification - From Team XXXX",htmlBody:message});
    ss1.getRange(i,8).setValue(done);
      
    }
    }  
}   