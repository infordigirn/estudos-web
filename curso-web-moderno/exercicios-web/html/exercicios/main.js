(function () {
    'use strict'

    document.querySelectorAll('[wm-folder]').forEach(folder => {
        console.log('opa')
        folder.onclick = function(e) {
            console.log('teste')
        }
    })
})()