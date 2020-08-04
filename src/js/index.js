const { default: Search } = require("./models/Search");

const status = {};

// 1) Get all of the events

const searchEvents = async () => 
{
    status.events = new Search();

    try{
        await status.events.getEvents();
    }catch(err)
    {
        alert('Something went wrong ;/');
    }
}

searchEvents();


setTimeout(() => 
{
    const elements = document.querySelectorAll('.iconS');
    const dates = document.querySelectorAll('.dateS');
    const links = document.querySelectorAll('.saveMe');
    const descs = document.querySelectorAll('.desc');
    const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

    status.events.events.forEach((el, index) => {
        console.log(el);
        //renderIcons(el.type);
        elements[index].src = `./icons/${el.type}.svg`;
        let temp = new Date(el.datetime);
        let day = days[new Date(el.datetime).getDay()];
        let month = temp.getMonth().toString().length == 2 ? temp.getMonth() : ('0' + temp.getMonth());
        let fullDate = `${temp.getUTCDay()}/${month}/${temp.getUTCFullYear()} ${day} ${temp.getHours()}:${temp.getMinutes()}`;
        dates[index].innerHTML = fullDate;
        links[index].href = el.registration_url;
        descs[index].innerHTML = el.description;
    })

},500);