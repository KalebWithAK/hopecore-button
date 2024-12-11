window.onload(() => {
    const hopecoreButton = document.getElementById('hopecore-button')
    const viewport = document.getElementById('vieport')

    hopecoreButton.addEventListener('click', () => addImage())
})

const imagePaths = [
    'light.JPEG',
    'tree.JPEG',
    'wheel.JPEG'
]