(function(){
    // 字符位置转屏幕坐标
    function pos2Coords($el, pos){
        const range = document.createRange()
        range.setStart($el, pos)
        range.setEnd($el, pos + 5)

        const selection = window.getSelection()
        selection.addRange(range)
        
        const rects = range.getClientRects()
        console.log('rects: ', rects, range.collapsed, selection.toString());
        return rects[0]
    }

    const d1 = document.getElementById('d1')
    const {left, top, height} = pos2Coords(d1.firstChild, 20)
    const cursor = document.getElementById('head-cursor')
    cursor.style = `left:${left}px;top:${top}px;height:${height}px;`

    const res = getSelection()
    console.log('res: ', res);
})()