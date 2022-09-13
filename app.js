const imageUrls = ["https://free-icons.net/wp-content/uploads/2020/03/food034.png",
                "https://tsukatte.com/wp-content/uploads/2021/06/cup-drink.png",
                "https://tsukatte.com/wp-content/uploads/2019/03/french-fries.png",
                "https://2.bp.blogspot.com/-ZUbCknZeov8/UWgWYvNxKzI/AAAAAAAAQB0/siBgcyenWbc/s1600/food_chicken_nugget.png"]

const stalker = document.getElementById('stalker');
const img = document.getElementById('img');

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

document.addEventListener("click", function() {
    img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
});
