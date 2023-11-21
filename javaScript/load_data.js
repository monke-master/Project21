const article1 = {
    id: "bagirov_article_1",
    title: "Битва за Гиперборею",
    photoPath: "../res/drawable/giper.jpg",
    eventDate: "17 мая 562 года",
    text: "17 мая 562 года состоялось второе нашествие ящеров на Империю Древних русов, что развязало «Вторую священную войну против ящеров». Ящеры послали в Святоград своего разведчика, который устроил там погром среди мирного населения, после чего в город вошли вражеские войска. Святослав Ясное Око созвал свою дружину, разбил врага и прославился по всей Руси своим славянским прострелом через сундук", 
    description: "Самая кропопролитная битва в истории человечества",
    publicationDate: (new Date()).getTime(),
    authorEmail: "bagirov.alex@yandex.ru",
    likes: 100500,
    comments: [
        {
            authorEmail: "bagirov.alex@yandex.ru",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            date: (new Date).getTime() 
        }
    ]
};


function loadAdmins() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length == 0) {
        const bagirov = {
            username: "bagirov",
            email: "bagirov.alex@yandex.ru",
            password: "lizards_must_die",
            articles: [article1]
        };
        localStorage.setItem('users', JSON.stringify([bagirov]));
    }
}

function loadArticles() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    if (articles.length == 0) {
        localStorage.setItem('articles', JSON.stringify([article1]));
        localStorage.setItem('bestArticles', JSON.stringify([article1]));
    }
}

loadAdmins();
loadArticles();