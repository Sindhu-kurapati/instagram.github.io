// document.querySelector('.profileName').innerHTML="sindhu";

var random =Math.floor(Math.random() * 10);
document.querySelector('.numOfPosts').innerHTML = random;


document.querySelector('.followerCount').innerHTML=Math.floor(Math.random()*1000);
document.querySelector('.followingCount').innerHTML=Math.floor(Math.random()*500);

fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user = data.results[0];
        // console.log(user)
        document.querySelector('.profileName').innerHTML=user.name.first;
        document.querySelector('.bioName').innerHTML=user.name.first + ' ' + user.name.last;
        document.querySelector('.profilePicture').src=user.picture.large;

        for(let i=0;i<random;i++){
            let img = document.createElement('img');
            img.src='https://picsum.photos/90' + i;

        document.querySelector('.posts').append(img);
        }

    })
})