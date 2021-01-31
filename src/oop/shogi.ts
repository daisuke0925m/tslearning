type Player = 'first' | 'second'
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

class Position {
    // private修飾子のついたプロパティは、Positionクラスから生まれたインスタンスのみで使用できる
    constructor(private suji: Suji, private dan: Dan) {}

    distanceForm(position: Position, player: Player) {
        if (player == 'first') {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan)),
            }
        }
    }
}

abstract class Piece {
    protected position: Position

    constructor(private readonly player: Player, suji: Suji, dan: Dan) {
        this.position = new Position(suji, dan)
    }

    moveTo(position: Position) {
        this.position = position
    }

    abstract canMoveTo(position: Position, player: Player): boolean
}
