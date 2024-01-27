
## video process

1. review docuement
2. create models test
3. create modesl
4. create functions test
5. create functions

## payment flow
```mermaid
sequenceDiagram
    title Payment Flow
    participant client browser
    participant appServer
    participant payment gatway
    participant shaparak

    client browser->>appServer: request payment

    appServer->>appServer: check order
    
    rect rgb(200, 150, 255)
        appServer->>+payment gatway: get payment token
        payment gatway->>-appServer: get token response
    end
    
    appServer->>appServer: store get token result

    appServer->>client browser: shaparak url
    client browser->>+shaparak: go to shaparak
    shaparak->>shaparak: process cart info flow
    shaparak->>-appServer: payment result on callback url
    appServer->>client browser: navigate to receipt page
    
    rect rgb(200, 150, 255)
        appServer->>+payment gatway: verify payment
        payment gatway->>-appServer: verify payment result
    end
    appServer->>appServer: store payment verification result
```



## digram creation

[mermaid](https://mermaid.js.org/syntax/sequenceDiagram.html)

## install jest
1. npm install --save-dev jest