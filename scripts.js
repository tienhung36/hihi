// document.addEventListener('DOMContentLoaded', function(){
//     var container = document.querySelector('.container');
//     var heartsContainer = document.querySelector('.hearts');
//     var text = document.getElementById('typed');
//     var words = text.textContent.split(' ');

//     // Xóa nội dung của phần tử h1
//     text.textContent = '';

//     // Hiển thị từng từ một với hiệu ứng fadeIn
//     displayWords(words, 0);

//     setInterval(function() {
//         createHeart(container, heartsContainer, 10);

//         setTimeout(function() {
//             var hearts = heartsContainer.querySelectorAll('.heart');
//             var numHeartsToRemove = Math.min(hearts.length, 9);
//             for (var i = 0; i < numHeartsToRemove; i++) {
//                 hearts[i].remove();
//             }
//         }, 2000);
//     }, 2000);
// });

// function displayWords(words, index) {
//     if (index < words.length) {
//         var word = words[index];
//         var span = document.createElement('span');
//         span.textContent = word + ' '; // Thêm dấu cách sau mỗi từ
//         document.getElementById('typed').appendChild(span);
        
//         gsap.fromTo(span, {
//             opacity: 0,
//             y: 20
//         }, {
//             opacity: 1,
//             y: 0,
//             duration: 0.56, // Giảm thời gian hiệu ứng
//             onComplete: function() {
//                 displayWords(words, index + 1);
//             }
//         });
//     }
// }

// function createHeart(container, heartsContainer, numHearts) {
//     for (var i = 0; i < numHearts; i++) {
//         var heart = document.createElement('div');
//         heart.classList.add('heart');
//         var heartSize = Math.floor(Math.random() * 40) + 20; // Kích thước ngẫu nhiên từ 20 đến 60 pixels
//         heart.style.width = heartSize + 'px';
//         heart.style.height = heartSize + 'px';
//         heart.style.left = Math.random() * (container.offsetWidth - heartSize) + 'px';
//         heart.style.top = Math.random() * (container.offsetHeight - heartSize) + 'px';
//         heartsContainer.appendChild(heart);

//         // Xóa trái tim sau 2 giây
//         setTimeout(function() {
//             heart.remove();
//         }, 2000);
//     }
// }
// document.addEventListener('DOMContentLoaded', function(){
//     var container = document.querySelector('.container');
//     var heartsContainer = document.querySelector('.hearts');
//     var text = document.getElementById('typed');
//     var originalText = text.textContent; // Lưu trữ văn bản ban đầu
//     var words = originalText.split(' ');
//     text.textContent = '';

//     // Hiển thị từng từ một với hiệu ứng fadeIn
//     displayWords(words);

//     setInterval(function() {
//         createHeart(container, heartsContainer, 10);

//         setTimeout(function() {
//             var hearts = heartsContainer.querySelectorAll('.heart');
//             var numHeartsToRemove = Math.min(hearts.length, 9);
//             for (var i = 0; i < numHeartsToRemove; i++) {
//                 hearts[i].remove();
//             }
//         }, 2000);
//     }, 2000);

//     function displayWords(words) {
//         if (words.length === 0) {
//             // Xóa dòng chữ khi hiển thị xong
//             text.textContent = '';
//             // Hiển thị lại từ đầu
//             displayWords(originalText.split(' '));
//             return;
//         }

//         var word = words.shift(); // Lấy từ đầu tiên trong mảng và loại bỏ nó
//         var span = document.createElement('span');
//         span.textContent = word + ' '; // Thêm dấu cách sau mỗi từ
//         text.appendChild(span);

//         gsap.fromTo(span, {
//             opacity: 0,
//             y: 20
//         }, {
//             opacity: 1,
//             y: 0,
//             duration: 0.46, // Thời gian hiệu ứng
//             onComplete: function() {
//                 displayWords(words); // Gọi đệ quy để hiển thị từng từ tiếp theo
//             }
//         });
//     }

//     function createHeart(container, heartsContainer, numHearts) {
//         for (var i = 0; i < numHearts; i++) {
//             var heart = document.createElement('div');
//             heart.classList.add('heart');
//             var heartSize = Math.floor(Math.random() * 40) + 20; // Kích thước ngẫu nhiên từ 20 đến 60 pixels
//             heart.style.width = heartSize + 'px';
//             heart.style.height = heartSize + 'px';
//             heart.style.left = Math.random() * (container.offsetWidth - heartSize) + 'px';
//             heart.style.top = Math.random() * (container.offsetHeight - heartSize) + 'px';
//             heartsContainer.appendChild(heart);

//             // Xóa trái tim sau 2 giây
//             setTimeout(function() {
//                 heart.remove();
//             }, 2000);
//         }
//     }
    
// });
document.addEventListener('DOMContentLoaded', function(){
    var container = document.querySelector('.container');
    var heartsContainer = document.querySelector('.hearts');
    var text = document.getElementById('typed');
    var originalText = text.textContent; // Lưu trữ văn bản ban đầu
    var words = originalText.split(' ');
    text.textContent = '';

    // Hiển thị từng từ một với hiệu ứng fadeIn
    displayWords(words);

    setInterval(function() {
        createHeart(container, heartsContainer, 15);
        displayNpyn(container);
        setTimeout(function() {
            var hearts = heartsContainer.querySelectorAll('.heart');
            var numHeartsToRemove = Math.min(hearts.length, 14);
            for (var i = 0; i < numHeartsToRemove; i++) {
                hearts[i].remove();
            }
        }, 2000);
    }, 2000);

    function displayWords(words) {
        if (words.length === 0) {
            // Xóa dòng chữ khi hiển thị xong
            text.textContent = '';
            // Hiển thị lại từ đầu
            displayWords(originalText.split(' '));
            return;
        }

        var word = words.shift(); // Lấy từ đầu tiên trong mảng và loại bỏ nó
        var span = document.createElement('span');
        span.textContent = word + ' '; // Thêm dấu cách sau mỗi từ
        text.appendChild(span);

        gsap.fromTo(span, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.492, // Thời gian hiệu ứng
            onComplete: function() {
                displayWords(words); // Gọi đệ quy để hiển thị từng từ tiếp theo
            }
        });
    }

    function displayNpyn(container) {
        // Xóa tất cả các phần tử NPYN hiện có trước khi tạo mới
        container.querySelectorAll('.npyn').forEach(function(npyn) {
            npyn.remove();
        });
        // Số lượng chữ NPYN cần hiển thị (có thể điều chỉnh)
        var numNpyn = 20;
        // Kích thước font và màu sắc
        var fontSize = 22;
        var fontColor = '#CCFFFF';
        for (var i = 0; i < numNpyn; i++) {
            var npyn = document.createElement('div');
            npyn.textContent = 'npyn';
            npyn.classList.add('npyn');
            npyn.style.fontSize = fontSize + 'px';
            npyn.style.color = fontColor;
            npyn.style.position = 'absolute';
            // Đặt vị trí ngẫu nhiên cho mỗi chữ
            npyn.style.left = Math.random() * (container.offsetWidth - numNpyn * fontSize) + (i * fontSize) + 'px';
            npyn.style.top = Math.random() * (container.offsetHeight - fontSize) + 'px';
            container.appendChild(npyn);
        }
    }

    function createHeart(container, heartsContainer, numHearts) {
        for (var i = 0; i < numHearts; i++) {
            var heart = document.createElement('div');
            heart.classList.add('heart');
            var heartSize = Math.floor(Math.random() * 40) + 20; // Kích thước ngẫu nhiên từ 20 đến 60 pixels
            heart.style.width = heartSize + 'px';
            heart.style.height = heartSize + 'px';
            heart.style.left = Math.random() * (container.offsetWidth - heartSize) + 'px';
            heart.style.top = Math.random() * (container.offsetHeight - heartSize) + 'px';
            heartsContainer.appendChild(heart);

            // Xóa trái tim sau 2 giây
            setTimeout(function() {
                heart.remove();
            }, 2000);
        }
    }
});
