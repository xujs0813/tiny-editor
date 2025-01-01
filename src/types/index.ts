export interface IBlock {
    id: string
    type: string
    text: any
    token: string
}

export interface ISelection {
    blockId: string
    start: number
    end: number
}

export interface IRect {
    left: number
    top: number
    width: number
    height: number
}