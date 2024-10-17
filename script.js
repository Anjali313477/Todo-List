function DateTime() {
    const newDate = new Date();
    const dateTimeString = newDate.toLocaleString();
    document.querySelector('.date').textContent = dateTimeString;
}

DateTime()