## Web Security

As the face of the web app, UIs are the door to most of the attacks that occur daily in our projects. Front-End developers have a responsibility perform good practices, also to keep our systems secure. The following are a few key techniques that minimize the risk of being attacked:

1. Known Vulnerable Components
   Using Known Vulnerable Components occurs when an application uses out-of-date third-party software with published vulnerabilities. That's why it's important to keep all our libraries updated. An issue like this, which is easily avoided, can result in data-breaches or even total loss of control of the app.

2. DOM-Based Cross-Site Scripting
   DOM-Base Cross-Site Scripting occurs when a n adversary can inject malicious scripts into a trusted website. This happens when a client executes the script (through a manipulated link, for instance) by accessing the page. A good way to prevent these kinds of attacks is important to avoid data injections to the DOM and sanitize the data according to the context.

3. Stored Cross-Site Scripting
   The easiest way a user has to interact with the web is through inputs. Not sanitizing the input sending the data to the server is a potential issue that could reach the data-bases and potentially spread along other users.
