// Phương thức tĩnh để tính giai thừa
class MathUtils {
    static factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * MathUtils.factorial(n - 1);
    }
}

// Hàm tính gần đúng chuỗi Taylor của e^x
function taylorSeriesApproximation(x, epsilon) {
    let sum = 1; // Khởi tạo tổng với giá trị đầu tiên là 1 (vì e^x = 1 + x + x^2/2! + x^3/3! + ...)
    let term = 1; // Term đầu tiên là 1
    let n = 1;

    // Tính tổng chuỗi Taylor đến khi điều kiện ε được thỏa mãn
    while (Math.abs(term) >= epsilon) {
        term = Math.pow(x, n) / MathUtils.factorial(n);
        sum += term;
        n++;
    }

    return sum;
}

function performTaylorApproximation() {
    // Lấy giá trị x và k từ input
    let x = parseFloat(document.getElementById("xValue").value);
    let k = parseInt(document.getElementById("kValue").value);

    // Kiểm tra xem giá trị x và k có hợp lệ không
    if (isNaN(x) || isNaN(k)) {
        alert("Vui lòng nhập giá trị hợp lệ cho x và k.");
        return;
    }

    // Tính giá trị ε dựa trên k
    let epsilon = Math.pow(10, -k);

    // Tính chuỗi Taylor gần đúng
    let taylorResult = taylorSeriesApproximation(x, epsilon);

    // Tính giá trị chuẩn bằng hàm Math.exp
    let standardResult = Math.exp(x);

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = `
        Kết quả chuỗi Taylor: ${taylorResult.toFixed(3)}<br>
        Kết quả bằng hàm chuẩn Math.exp: ${standardResult.toFixed(3)}<br>
        Sai số: ${(Math.abs(taylorResult - standardResult)).toFixed(3)}
    `;
}
