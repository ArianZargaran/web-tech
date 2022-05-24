# How does the Internet work?

## Internet infrastructure

The Internet is a vast network of cables that facilitates the transmission of "Data Packets".

## The Data Packet

Using the example of an email, the Data Packet is composed by the following parts:

**The Header**
The Header contains crucial information about the package delivery, such as:

- The `Sender's IP Address`
- The `Receiver's IP Address`
- The `Protocol`. Well-established set of rules and standards needed to communicate between machines.
- The `Packet Number`

**The Payload**
The data to be transmitted, in our example, the email itself.

**Trailer**
Carries transmission status information, the end of the packet information, etc.

## Bandwidth: The Speed in numbers

The speed at which the Data Packets can be transmitted is determined by the bandwidth. Bandwidth Transmission Capacity is measured by Bitrate.
The Bitrate is the number of bits per second a digital network can transmit.

_Latency_
The amount of time it takes for 1 bit to be sent from the sender to the receiver.

## Web protocols

**IP** (Internet Protocol) The protocol establishes that each computer connected to a Network (like the Internet) has its unique IP; a string of Numbers separated by periods.

**TCP** (Transmission Control Protocol) Protocol that facilitates the transmission of Data Packets. It ensures no information is missing.

**HTTP/HTTPS** (Hypertext Transfer Protocol/Hypertext Transfer Protocol Secure) Defines how the Internet browser communicates with the web server to display the website. Websites are equally transmitted as data-packets through the Internet.

## The Web server

A web server is nothing more and nothing less than a computer that hosts the website.
Servers are configured to accept remote connections with Internet users and relay data through HTTP/HTTPS protocols.
