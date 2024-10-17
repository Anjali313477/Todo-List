function CurrentTime() {
    const newDate = new Date();
    const dateTimeString = newDate.toLocaleString();
    document.querySelector('.date').textContent = dateTimeString;
}

let interval = setInterval(CurrentTime,1000)


 