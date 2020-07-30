const months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const formatters = {
    date: (date) => {
        const d = new Date(date);
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`;
    }
};