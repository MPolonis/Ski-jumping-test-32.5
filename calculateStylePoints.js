const calculateStylePoints = (styleNotes) => {
    const notes = styleNotes.filter((note) => {
        return ((note >= 0) && (note <= 20) && (note !== '') && (note !== null)); 
    })
    if (notes.length === 5) {
        const all = notes.reduce((note1, note2) => {
            return note1 + note2
        }, 0);
        return (all - Math.max(...notes) - Math.min(...notes))
    } else {
        return false
    }
};

module.exports = calculateStylePoints;