function performStringOperations() {
    // Lấy chuỗi từ input
    let inputString = document.getElementById("inputString").value.trim();

    if (inputString === "") {
        alert("Vui lòng nhập một chuỗi!");
        return;
    }

    // Đảo ngược chuỗi
    let reversedString = inputString.split('').reverse().join('');

    // Đếm số từ trong chuỗi (dùng khoảng trắng làm ngăn cách từ)
    let wordsArray = inputString.split(/\s+/);
    let wordCount = wordsArray.length;

    // Tìm từ xuất hiện nhiều nhất
    let wordFrequency = {};
    let maxFreq = 0;
    let mostFrequentWord = null;

    wordsArray.forEach(word => {
        word = word.toLowerCase(); // Bỏ qua phân biệt hoa thường
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        if (wordFrequency[word] > maxFreq) {
            maxFreq = wordFrequency[word];
            mostFrequentWord = word;
        }
    });

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = `
        Chuỗi đã nhập: ${inputString}<br>
        Chuỗi đảo ngược: ${reversedString}<br>
        Số từ trong chuỗi: ${wordCount}<br>
        Từ xuất hiện nhiều nhất: ${mostFrequentWord} (${maxFreq} lần)<br>
    `;
}
