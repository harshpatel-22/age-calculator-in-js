const userInput = document.getElementById('date');
const result = document.getElementById('result');
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    // console.log(userInput.value);
    // console.log(new Date(userInput.value));

    let dob = new Date(userInput.value);

    
    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();

    let now = new Date();

    let d2 = now.getDate();
    let m2 = now.getMonth() + 1;
    let y2 = now.getFullYear();

    let d3, m3, y3;

    // let temp = new Date(y1, m1, 0).getDate();
    // console.log(temp);

    y3 = y2 - y1;
    // m3 = m2 - m1;
    // d3 = d2 - d1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysOfMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    // console.log(y3,m3,d3);
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;


}

function getDaysOfMonth(year, month) {
    // returns the no. of days of the previous month
    return new Date(year, month, 0).getDate();
}