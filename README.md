Solution
I have used mongoose with mongoDB for ease. Solution assumes the following:
Database is available atmognodb atlas free account, and db name is product.
Core logic of the problem is present at src/app/controllers/product.js.

There is single controller /product, which has







a post method to post views document (as described in the problem statement), and
a get method which accepts a. ProductID as MANDATORY JSON body: {"ProductID":"Hamburger"} 
b. startAt and endAt as OPTIONAL query parameters which take input as ISO date string.
querying is handled by getViewerList function under the same controller file.


Is env.example updated in your latest pull
Make sure that you have latest env setup, if there is any changes in env.example while you pull from parent branch, just copy the contents of it and replace it with .env file.

How to Run




Just run npm install and then run npm start  to start theproject.

API Endpoints



/GET ?startAt=productID=productID&DATE1&endAt=DATE2 OPTIONAL query parameters to specify start and end dates.
http://localhost:3000/getProductDetails?productID=1






/POST http://localhost:3000/productVisit to add the product view 
http://localhost:3000/productVisit
{
"UserID":"2",
"viewDate":"Mon Nov 16 2020 11:57:49 GMT+0530",
"productID":"1"


}
