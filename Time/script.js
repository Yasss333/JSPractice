function update() {
    const Time = document.getElementById("time");

    const dateelement = document.getElementById("date");

    const now = new Date();

    const hour = now.getHours() % 12 || 12;

    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    Time.textContent = ` ${hour}:${minutes}:${seconds}:${ampm}`;
    dateelement.textContent=now.toDateString(undefined,Option);
}

setInterval(update,1000)

update();