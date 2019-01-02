import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(calback) {
    if(!loadHtmlSuccessCallbacks.includes(calback)) {
        loadHtmlSuccessCallbacks.push(calback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(calback => calback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()