(function(){
    console.log('core is run!');

    const $headCursor = document.getElementById('head-cursor')
    const $tailCursor = document.getElementById('tail-cursor')
    const $input = document.getElementById('hidden-input')

    window.addEventListener('mouseup', handleMouseup)
    $input.addEventListener('input', handleInput)
    $input.addEventListener('blur', handleInputBlur)

    function handleMouseup(event){
        const {clientX, clientY, target} = event
        console.log('clientX, clientY, target: ', clientX, clientY, target);

        setHeadCursor()
        setTailCursor()

        $input.focus()
    }

    function setHeadCursor(){
        const rects = getSelection().getRangeAt(0).getClientRects()
        setPosStyle(rects[0], $headCursor)
    }

    function setTailCursor(){
        const rects = getSelection().getRangeAt(0).getClientRects()
        const last = rects[rects.length - 1]
        const {left, width, top, height} = last
        setPosStyle({left: left + width, top, height}, $tailCursor)
    }

    function setPosStyle({left, top, height}, ele){
        ele.style = `left:${left}px;top:${top}px;height:${height}px`
    }

    function handleInput(event){
        console.log(event.target.value);
    }

    function handleInputBlur(){
        $input.value = ''
    }
})()