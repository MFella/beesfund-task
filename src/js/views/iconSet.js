export const renderIcons = icon => 
{
    const elements = document.querySelectorAll('.iconS');
    elements.forEach(el => {
        
        el.src = `./icons/${icon}.svg`;
    })
}