function formatDate(timeInMillis) {
    const date = new Date(timeInMillis);

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const formatter = new Intl.DateTimeFormat('ru-RU', options);
    return formatter.format(date);

}