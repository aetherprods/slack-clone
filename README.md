
# slack-clone
An attempt to build a basic slack clone, using mySQL for db, ASP.NET Core for the back-end, and React for the front-end. In particular it should look something like this (as per Slack's actual architecture):

-----------------------------------------------------------------
.react-client-app                                               |
.  ^                                                            |
.  |                                                            |
.  |<--> .NET Core message-server for websocket connections     |
.  |              ^                                             |
.  |              |                                             |
.  |              v                                             |
.  |<--> .NET Core RESTful API for auth, db, and ws management  |
.                 ^                                             |
.                 |                                             |
.                 v                                             |
.               mySQL                                           |
-----------------------------------------------------------------

While Slack uses a custom Java server for the message portion and a LAMP style PHP monolith for their webapp, as our intention is to learn to use .NET we will be writing both servers in .NET Core. Of course, there is no real need (for our purposes) to have two servers, but as we are attempting to emulate Slack's design, this is how we will be going forward. 

In particular, the message server will be located at "localhost/ws-url", with the webapp located at "localhost/api", with the client being an SPA served at "localhost/". At the most basic, the client will communicate authorization credentials to the webapp, which will then serve the client with a message regarding current state (that is, a JSON response with the fully current "world state", which explicitly holds information about the channel, subchannels, users, messages, IMs, etc.), along with a websocket url to connect to, a "latest_events_ts", and a "cache_ts". 

The client will then ping the message server over the websocket with its authorization credentials, its last known event, and its current location marker as provided by the webapp. The message server will coalesce these and bring the client up to date with the global event log removing the need to resend information the client already has. For its part, of course, the client will need to keep a local cache of the event log as it knows it. 