# Lab 5 - Starter

Lance Tran  
[EXPOSE](https://thelancetran.github.io/Lab5_Starter/expose.html)  
[EXPLORE](https://thelancetran.github.io/Lab5_Starter/explore.html)  

### Explore Part 3
1. I would not use a unit test to test the "message" feature of a messaging application because this feature seems too large scale. Assuming the "message" feature allows a user to write and send a message to another user, I believe that this feature has too many factors to take into account. For example, some of these factors may include network communication, server infrastructure, external services, APIs, etc. 
2. I would use a unit test to test the "max message length" feature of a messaging application because this feature seems to be on a smaller scale. Assuming this feature prevents the user from typing more than 80 characters, I believe that this feature would be easier to test by tracking the number of characters the user has typed. Additionally, this feature can be tested locally without many external factors to affect it. 
