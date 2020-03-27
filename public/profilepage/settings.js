const updateBtn = document.getElementById('update-Btn');
// const getBtn = document.getElementById('testButton');



//UPDATE
function updateUser() {
    event.preventDefault();
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var input = queryString.slice(1);
    var updatedUser = {
    name: document.getElementById("changingName").value,
    email:document.getElementById("changingEmail").value,
    username: document.getElementById("changingUsername").value,
    password: document.getElementById("changingPw").value,
    image: document.getElementById("changingPhoto").value,
    country: document.getElementById("changingCountry").value
    };
    var json = JSON.stringify(updatedUser);

    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:3000/sn-users/" + input, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
        var user = json;
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log(user);
            alert("updated successfully");
        } else {
            console.error(user);
            alert("Did not update successfully")
        }
    };
    xhr.send(json);
}
function reload() {
    location.reload();
  }

updateBtn.addEventListener('click', ()=>{ updateUser(); reload();});

<<<<<<< HEAD
        xhr.onerror = () => {
            reject('Something went wrong');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

var getName = document.getElementById("testName").value;

const updateData = () => {
    
<<<<<<< HEAD
    sendHttpRequest('PATCH', 'http://localhost:3000/sn-users/'+'Nick+Smith', {
=======
    sendHttpRequest('PATCH', 'http://localhost:3000/sn-users/'+getName, true, {
>>>>>>> profile_page_v1.0
        
        name: document.getElementById("changingName").value,
        username: document.getElementById("changingUsername").value,
        email: document.getElementById("changingEmail").value,
        image: document.getElementById("changingPhoto").value,
        country: document.getElementById("changingCountry").value,

    }).then(responseData => {
        console.log(responseData);
<<<<<<< HEAD
        // console.log(getName);
=======
        console.log(getName.name);
>>>>>>> profile_page_v1.0
    })
    .catch(err => {
        console.log(err);
    })
};

updateBtn.addEventListener('click', updateData);
// getBtn.addEventListener('click', getUserData);
=======
>>>>>>> profile_page_v1.0
