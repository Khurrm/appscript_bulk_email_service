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
   
   var quotaLeft = MailApp.getRemainingDailyQuota(); // to check the daily quota.
   Logger.log(quotaLeft);
   
   
   for (var i = 2; i <=lr; i++){
   var interim = ss1.getRange(i,5).getValue(); 
   Logger.log(interim);
   if(interim != "done")
   
   {
   var candidate = 
      {
        assetvalue: ss1.getRange(i,1).getValue(),
        first_name: ss1.getRange(i,2).getValue(),
        last_name : ss1.getRange(i,3).getValue(),
        currentemail: ss1.getRange(i,4).getValue(),
        model: ss1.getRange(i,5).getValue(),
        serialnumber: ss1.getRange(i,6).getValue()
                
      };
   // var temple = HtmlService.createTemplateFromFile('htmlandroidsend');
   var temple = HtmlService.createTemplateFromFile('XXXSend.html'); //mention the name of the file as in Appscript
   //var temple = HtmlService.createTemplateFromFile('26Nov');
   temple.candidate = candidate; 
   var message = temple.evaluate().getContent();
   var currentemail = ss1.getRange(i,4).getValue();   
   Logger.log(currentemail);
   // var subjectLine = "Hi " + candidate.first_name + "- Please update your XXXXXXX";
   var subjectLine = "Hi " + candidate.first_name + " - you are XXXXXX";
   var messageBody = "Hi " + candidate.first_name;
   
   SpreadsheetApp.flush();
   //MailApp.sendEmail({to:currentemail,subject:subjectLine,body:messageBody,htmlBody:message}); 
   //GmailApp.sendEmail(currentemail, subjectLine,messageBody,{'from':aliases[4], name:"XXXX Team Message",htmlBody:message,noReply:true});
   //GmailApp.sendEmail(currentemail, subjectLine,messageBody,{'from':aliases[2], name:"XXXXX Notification - Team XXXXX",htmlBody:message,noReply:true});
   //MailApp.sendEmail(currentemail, subjectLine,messageBody,{noReply:true});
   
	GmailApp.sendEmail(currentemail, subjectLine,messageBody,{'from':aliases[1], name:"Notification - From Team XXXX",htmlBody:message});
    ss1.getRange(i,8).setValue(done);
   
      
    }
    }  
}   