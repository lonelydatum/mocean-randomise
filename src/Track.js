
function Track(category, action, label, extra){
    console.log(category, action, label, extra);
    window.ga('send', 'event', category, action, label, extra); 
}

export default Track