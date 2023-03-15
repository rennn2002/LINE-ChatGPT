function requestCompletion(chat) {
  // API endpoint 
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  let headers = {
    'Authorization':'Bearer YOUR OPENAI TOKEN',
    'Content-type': 'application/json',
    'X-Slack-No-Retry': 1
  };

  let options = {
    'muteHttpExceptions' : true,
    'headers': headers,
    'method': 'POST',
    'payload': JSON.stringify({
      'model': 'gpt-3.5-turbo',
      "messages": [{"role": "user", "content": chat}]
    })
  };

  const response = JSON.parse(UrlFetchApp.fetch(apiUrl, options).getContentText());

  let gpt_response = response["choices"][0]["message"]["content"].replace(/\r?\n/g,"")

  console.log(response["choices"][0]["message"]["content"].replace(/\r?\n/g,""));

  return gpt_response;
}