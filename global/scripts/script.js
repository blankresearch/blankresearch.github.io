function showContent(id) {
    ['vision', 'products'].forEach(section => {
        document.getElementById(section).classList.add('hidden')
    })
    document.getElementById(id).classList.remove('hidden')
}
window.onload = () => showContent('vision');