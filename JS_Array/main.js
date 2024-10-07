// Tạo các ô nhập liệu để người dùng nhập 10 phần tử
window.onload = function() {
    let inputContainer = document.getElementById('inputFields');
    for (let i = 0; i < 10; i++) {
        let input = document.createElement('input');
        input.type = 'number';
        input.id = 'num' + i;
        input.placeholder = `Phần tử ${i+1}`;
        inputContainer.appendChild(input);
    }
}

function performOperations() {
    // Lấy giá trị từ các ô input
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let value = parseInt(document.getElementById('num' + i).value);
        if (isNaN(value)) {
            alert(`Phần tử ${i+1} không hợp lệ. Vui lòng nhập số nguyên.`);
            return;
        }
        arr.push(value);
    }

    // Tính tổng các phần tử trong mảng
    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    // Kiểm tra tổng là chẵn hay lẻ
    let sumType = (sum % 2 === 0) ? 'chẵn' : 'lẻ';

    // Đếm số lượng số chẵn và số lẻ
    let evenCount = arr.filter(num => num % 2 === 0).length;
    let oddCount = arr.filter(num => num % 2 !== 0).length;

    // Sắp xếp mảng theo thứ tự tăng dần
    let sortedAsc = [...arr].sort((a, b) => a - b);

    // Sắp xếp mảng theo thứ tự giảm dần
    let sortedDesc = [...arr].sort((a, b) => b - a);

    // Tìm phần tử xuất hiện nhiều nhất
    let freqMap = {};
    let maxFreq = 0;
    let mostFrequent = null;
    arr.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mostFrequent = num;
        }
    });

    // Hàm kiểm tra số nguyên tố
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Đếm số lượng số nguyên tố trong mảng
    let primeCount = arr.filter(isPrime).length;

    // Hiển thị kết quả ra màn hình
    document.getElementById("result").innerHTML = `
        Mảng bạn đã nhập: ${arr.join(', ')}<br>
        Tổng các phần tử: ${sum} (${sumType})<br>
        Số lượng số chẵn: ${evenCount}<br>
        Số lượng số lẻ: ${oddCount}<br>
        Mảng tăng dần: ${sortedAsc.join(', ')}<br>
        Mảng giảm dần: ${sortedDesc.join(', ')}<br>
        Phần tử xuất hiện nhiều nhất: ${mostFrequent} (${maxFreq} lần)<br>
        Số lượng số nguyên tố: ${primeCount}<br>
    `;
}
