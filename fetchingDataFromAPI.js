function getAPIResponse(){
    let requestInfo = new XMLHttpRequest();
    requestInfo.open("GET","https://jsonplaceholder.typicode.com/posts"); /* والهدف منها تبدا تجهز الطلب الموجود من خلال تحديد نوع لريكوست والرابط*/


    requestInfo.responseType = "json" /* As a smaller letter ! */

    // الان لارسال هذا الريكويست كتالي
    requestInfo.send();

    // know as variable : onreadystatechange
    // The onreadystatechange property defines a function to be executed when the readyState changes. 
    // فوظيفتها الرئيسية انك تتبع الحالة الخاصة بالريكويست
    
    // requestInfo.onreadystatechange = function(){
    //     console.log(requestInfo.responseText);
    // }

    // دالة اخرى بحيث انو قيمتها دالة يتم استدعائها بمجرد استلام الريسبونس وصار موجود عندي
    requestInfo.onload = function(){
        // console.log(typeof requestInfo.response);
        // responseText array of string
        // response be as object! [ normal array  ] when using responseType = "JSON"

        let postInfo = requestInfo.response;
        for(post of postInfo){
            document.getElementById('topic-title').innerHTML += `<h4> ${post.title} <h4>`
        }

        // بالطريقة السابقة انت بدئت تجيب البيانات بالطريقة الصحيحة
    }
}

// The post be as data!

function creatingPost(){
    let requestData = new XMLHttpRequest();
    
    // this part you needed to do firstly then continue implementations :
    requestData.responseType="json";
    requestData.open("POST","https://jsonplaceholder.typicode.com/posts");

    requestData.setRequestHeader("Accept","application/json")
    requestData.setRequestHeader("Content-type","application/json")


    /*
        **`"Accept": "application/json"`**: The client tells the server it expects the server's response to be in JSON format.

        **`"Content-type": "application/json"`**: The client indicates that the data it is sending to the server is in JSON format.
    
        Using these headers ensures that both the client and server are in agreement on the format of the data being exchanged, preventing data parsing errors and enabling smooth communication.
    */

    let bodyParm = 
    `{
        "title": " Ahmed Nayel - title ",
        "body": "Ahmed Nayel - Body",
        "userId": 1
    }`

    requestData.send(bodyParm);

    // important section

    requestData.onload = function(){
        if(requestData.status >= 200 && requestData.status < 300){
            // do creating post info through the JS code rather than POST app! 
            let responseData = requestData.response;
            console.log(responseData) 
        
        }else{
            alert("Server Error , Please Visit This Page Last Time!")
    }
    }
}

        /*
            We create a POST request to send data to the server to create a new resource (a new post) with the provided JSON data.

            with more details :

            Creating a POST request to send data to the server to create a new resource (such as a new post) serves several purposes:

            1. **Data Submission**: It allows the client to send data to the server to be stored, processed, or used in some way. In your example, the data includes a title, body, and userId for a new post.

            2. **Resource Creation**: The POST request is used to create a new resource on the server. This is part of the RESTful API design, where POST is specifically used for creating new resources.

            3. **Server Processing**: The server receives the data, processes it (e.g., storing it in a database), and then typically returns a response indicating the success or failure of the operation. It might also return the created resource or some metadata about it.

            4. **Client-Server Communication**: This process is a fundamental part of how web applications work, enabling dynamic interaction and updates without needing to reload the entire webpage.
                    
        */
 
function updatePost(){
    // part 1
    let requestInformation = new XMLHttpRequest();

    // part 2
    requestInformation.response.responseType = "json";
    requestInformation.open("PUT","https://jsonplaceholder.typicode.com/posts/1")

    // part 3
    requestInformation.setRequestHeader("Accept","application/json")
    requestInformation.setRequestHeader("Content-Type","application/json")

    // part 4

    let updatedContent= `
        {
            "id": 1,
            "title": "Ahmed Nayel Al Darabea-title update",
            "body":  "Ahmed Nayel Al Darabea-body update",
            "userId": 1
        }
    `

    // part 5
    requestInformation.send(updatedContent)
    
    // part 6
    requestInformation.onload = function(){
        if(requestInformation.status >= 200 && requestInformation.status < 300){

            // now we want to think about responsibility process
            let responseProcess = requestInformation.response;
            console.log(responseProcess)
            alert("Your Response Is Done Correctly!")

        }else{
            alert("Error in the server , please visit this page later and thank you!")
        }
    }
}
    
function deletePost(){
    let requestPart = new XMLHttpRequest();
    
    requestPart.response.responseType ="json";
    requestPart.open("DELETE","https://jsonplaceholder.typicode.com/posts/1")
    
    requestPart.setRequestHeader("Accept","application/json");
    requestPart.setRequestHeader("Content-Type","application/json");

    // important section!
    requestPart.send();

    requestPart.onload = function(){
        if(requestPart.status >= 200 && requestPart.status < 300){
            let responseSection = requestPart.response;
            console.log(responseSection);
            alert("Your Delete Done Correctly!")
        }else{
            alert("Server Error!");
        }
    }
}

// to get specific data not all of the data 
function getFilterPart(){

    let requestSection = new XMLHttpRequest();

    requestSection.responseType = 'json';
    requestSection.open("GET","https://jsonplaceholder.typicode.com/posts?userId=1");

    requestSection.setRequestHeader("Accept","application/json")
    requestSection.setRequestHeader("Content-Type","application/json")

    requestSection.send();

    requestSection.onload = function(){
        if(requestSection.status >= 200 && requestSection.status < 300){
            let resultResponse = requestSection.response;

            for(getInfo of resultResponse)
                document.getElementById("topic-title").innerHTML += `<h4> ${getInfo.title} </h4>`

        }else{
            alert("Server Error!");
        }
    }
}