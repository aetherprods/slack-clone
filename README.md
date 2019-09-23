# slack-clone
An attempt to build a basic slack clone, using mySQL for db, ASP.NET Core for the server, and React for the front-end. In particular it should look something like this (as per Slack's actual architecture):


react-client-app
  ^
  |
  |--> dotnet core web app for message server
  |              |
  |              v
  |--> LAMP app serving RESTful API for auth, db, and ws management
                 |
                 v
               mySQL