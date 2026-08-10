let responsecode = 300;
switch (responsecode) {
    case 200:
        console.log("200 OK");
        break;
    case 201:
        console.log("201 Created");
        break;
    case 400:
        console.log("400 Bad Request");
        break;
    case 401:
        console.log("401 Unauthorized");
        break; 
    case 404:
        console.log("404 Not Found");
        break;
        default:
        console.log(responsecode + " Unknown Response Code");   
        break;
}