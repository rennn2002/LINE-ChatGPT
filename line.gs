function doPost(e) {
  //LINE Messaging API
  let token = "YOUR LINE MESSAGE API TOKEN";

  let eventData = JSON.parse(e.postData.contents).events[0];

  let replyToken = eventData.replyToken;

  let messageType = eventData.message.type;

  let userMessage = eventData.message.text;
  let replyMessage = requestCompletion(userMessage);

  let url = 'https://api.line.me/v2/bot/message/reply';

  let payload = {
    'replyToken': replyToken,
    'messages': [{
        'type': 'text',
        'text': replyMessage
      }]
  };

  let options = {
    'payload' : JSON.stringify(payload),
    'myamethod'  : 'POST',
    'headers' : {"Authorization" : "Bearer " + token},
    'contentType' : 'application/json'
  };

  UrlFetchApp.fetch(url, options);
}