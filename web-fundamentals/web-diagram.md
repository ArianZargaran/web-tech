# The web connections flow diagram

## Steps to render a page into a web browser: The initial GET request.

0. The user opens the browser and enters a link on the URL input bar.
1. Our modem communicates with our Internet Service Provider (ISP), which translates the web address, into a numerical IP address.
   -- This is done through Domain Name Servers (DNS).
   -- The DNS are a list of domain names, and their corresponding IP address.
   -- DNS are administered by our ISP.
   -- If the ISP is NOT able to locate the IP in their DNS records, they will contact other authoritative DNS.
2. Once the IP is found, it sends this data (IP address), back to the web browser.
3. The web browser sends a GET request to the IP address provided.
4. If the request is successful, the contents of the web page would be delivered through data packets (with the HTML code) back to the web browser.
5. The browser would display that HTML code as a website.

### HTML: The instructor.

HTML is the programming language that instructs your web browser on how to present the page.
